import { getAuthToken } from './authentication';
import {renameKeys, invertKeys} from './helperFunctions'

export async function createNewInstance(url, data, instanceName, method='POST', authentication=true) {
    const headers = {}
    if (authentication){
        headers['Authorization']= `Token ${getAuthToken()}`;
    }
    headers['Content-Type']= 'application/json'
    const response = await fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: headers,
        });
        
    if (!response.ok){
        const errorMsg = instanceName === "loginCred" ? 'An error occured while logging in': 
        `An error occured while creating new ${instanceName}`
    
        const error = new Error(errorMsg);
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    
    const instance = await response.json();
    return instance;
}

export async function instanceMappingWrapper(url, instanceName, keyMappings, 
    data, method='POST', authentication=true){

    const mappedData = renameKeys(data, keyMappings)
    try{
    const instance = await createNewInstance(
            url,
            mappedData, 
            instanceName,
            method,
            authentication
        )
        return instance;
    } catch(error){
        if(error.code === 400){
            const inverted_mapper = invertKeys(keyMappings);
            error.info = renameKeys(error.info, inverted_mapper)
            throw error;
    }
    throw error;
}
}

export async function createNewRegistration(loginData) {
    const keyMappings = {
        password: 'password1',
        confirmPassword: 'password2',
    }
    const url = `http://localhost:8000/api/registration/`
    const instanceName = 'loginCred'
    const loginCred = await instanceMappingWrapper(url, instanceName, keyMappings, loginData,
       "POST" ,false
    )
    return loginCred
}

export async function sendLoginRequest(registrationData) {
    const keyMappings = {
    }
    const url = `http://localhost:8000/api/login/`
    const instanceName = 'registration'
    const registration = await instanceMappingWrapper(url, instanceName, keyMappings, registrationData,
       "POST" ,false
    )
    return registration
}


export async function setUserInfo(userInfoData) {
    const keyMappings = {
        academicLevel: 'academic_level',
        institution: 'institution_name',
        semester: 'current_year',
        supportType: 'required_help'
    }
    const instanceName = 'userInfo'
    const url = `http://localhost:8000/api/user_info/`
    const userInfo = await instanceMappingWrapper(url, instanceName, keyMappings, userInfoData, "PUT")
    return userInfo
}

export async function uploadDocument(file) {
    const headers = {}
    
    headers['Authorization']= `Token ${getAuthToken()}`;
    
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`http://localhost:8000/api/documents/`, {
        method: "POST",
        body: formData,
        headers: headers,
        });
        
    if (!response.ok){
        const error = new Error('An error occured while uploading the document');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    
    const instance = await response.json();
    return instance;
}


export async function setUserMessage(usermessageData, sectionId) {
    const keyMappings = {
        message: 'content',
    }
    const instanceName = 'userMessage'
    const url = `http://localhost:8000/api/sections/${sectionId}/messages`
    const userMessage = await instanceMappingWrapper(url, instanceName, keyMappings, usermessageData, "POST")
    return userMessage
}


export async function getData(url, instanceName, authentication=true) {
    const headers = {}
    if (authentication){
        headers['Authorization']= `Token ${getAuthToken()}`;
    }
    const response = await fetch(url, {
        method: "GET",
        headers: headers,
        });
        
    if (!response.ok){
        const errorMsg =`An error occured while getting${instanceName}`
    
        const error = new Error(errorMsg);
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    
    const data = await response.json();
    return data;
}

export async function getMessages(sectionId) {
    const instanceName = 'Messages'
    const url = `http://localhost:8000/api/sections/${sectionId}/messages`
    const userMessage = await getData(url, "messages")
    return userMessage
}

export async function getCourse(courseId) {
    const instanceName = 'course'
    const url = `http://localhost:8000/api/courses/${courseId}/`
    const course = await getData(url, "course")
    return course
}

export async function getSections(courseId) {
    const instanceName = 'courseSections'
    const url = `http://localhost:8000/api/courses/${courseId}/sections/`
    const sections = await getData(url, "courseSections")
    return sections
}

export async function getSection(sectionId) {
    const instanceName = 'section'
    const url = `http://localhost:8000/api/sections/${sectionId}/`
    const section = await getData(url, "section")
    return section
}

export async function getCourses() {
    const instanceName = 'courses'
    const url = `http://localhost:8000/api/courses/`
    const courses = await getData(url, "courses")
    return courses
}

export async function getSubjects() {
    const instanceName = 'subjects'
    const url = `http://localhost:8000/api/subjects/`
    const courses = await getData(url, "subjects")
    return courses
}