import {renameKeys, invertKeys} from './helperFunctions'

export async function createNewInstance(url, data, instance_name) {
    const response = await fetch(url, {
        method:'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        },
        });
        
    if (!response.ok){
        const error = new Error(`An error occured while creatind new ${instance_name}`);
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    
    const instance = await response.json();
    return instance;
}

export async function createNewRegistration(registrationData) {
    const keyMappings = {
        password: 'password1',
        confirmPassword: 'password2',
    }
    const mappedData = renameKeys(registrationData, keyMappings)
    try{
    const registration = await createNewInstance(
            `http://localhost:8000/api/registration/`, 
            mappedData, 
            'registration'
        )
        return registration;
    } catch(error){
        if(error.code === 400){
            const inverted_mapper = invertKeys(keyMappings);
            error.info = renameKeys(error.info, inverted_mapper)
            throw error;
    }
    throw error;
}
    
}