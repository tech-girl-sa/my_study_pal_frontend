import { getAuthToken } from './authentication';
import {renameKeys, invertKeys} from './helperFunctions'

export async function createNewInstance(url, data, instanceName, method='POST', authentication=true) {
    const headers = {}
    if (authentication){
        headers['Authorization']= `Token ${getAuthToken()}`;
    }
    headers['Content-Type']= 'application/json'

    let response;

    response = await fetch(url, {
        method: method,
        headers: headers,
        body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok){
        const errorMsg = instanceName === "loginCred" 
            ? 'An error occured while logging in'
            : `An error occured while creating new ${instanceName}`;
    
        const error = new Error(errorMsg);
        error.code = response.status;

        try {
            error.info = await response.json();
        } catch (e) {
            error.info = {};
        }

        throw error;
    }

    // Handle empty response
    if (response.status === 204) return null; 

    let instance;
    try {
        instance = await response.json();
    } catch (e) {
        instance = null; 
    }

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
    const userMessage = await getData(url, instanceName)
    return userMessage
}

export async function getCourse(courseId) {
    const instanceName = 'course'
    const url = `http://localhost:8000/api/courses/${courseId}/`
    const course = await getData(url, instanceName)
    return course
}

export async function getSections(courseId) {
    const instanceName = 'courseSections'
    const url = `http://localhost:8000/api/courses/${courseId}/sections/`
    const sections = await getData(url, instanceName)
    return sections
}

export async function getSection(sectionId) {
    const instanceName = 'section'
    const url = `http://localhost:8000/api/sections/${sectionId}/`
    const section = await getData(url, instanceName)
    return section
}

export async function getCourses({ search, ordering, filters }) {
    let params = new URLSearchParams(filters);
    if (ordering) params.append("ordering", ordering);
    if (search) params.append("search", search);
    params = params.toString();
    const instanceName = 'courses'
    const url = `http://localhost:8000/api/courses/?${params}`
    const courses = await getData(url, instanceName)
    return courses
}

export async function getSubjects({ search, ordering, filters }) {
    let params = new URLSearchParams(filters);
    if (ordering) params.append("ordering", ordering);
    if (search) params.append("search", search);
    params = params.toString();
    const instanceName = 'subjects'
    const url = `http://localhost:8000/api/subjects/?${params}`
    const subjects = await getData(url, instanceName)
    return subjects
}

export async function getDocuments({ search, ordering, filters }) {
    let params = new URLSearchParams(filters);
    if (ordering) params.append("ordering", ordering);
    if (search) params.append("search", search);
    params = params.toString();
    const instanceName = 'documents'
    const url = `http://localhost:8000/api/documents/?${params}`
    const documents = await getData(url, instanceName)
    return documents
}

export async function getDocument(documetId) {
    const instanceName = 'document'
    const url = `http://localhost:8000/api/documents/${documetId}/`
    const document = await getData(url, instanceName)
    return document
}


export async function getSubjectTags() {
    const instanceName = 'Tags'
    const url = `http://localhost:8000/api/subjects/tags/`
    const Tags = await getData(url, instanceName)
    return Tags
}

export async function setSubject(subjectData, method="POST", subjectId='') {
    const keyMappings = {}
    const instanceName = 'subject'
    let url = ""
    if (method==="POST"){
     url = `http://localhost:8000/api/subjects/`
    } else {
        url = `http://localhost:8000/api/subjects/${subjectId}/`
    }
    const subject = await instanceMappingWrapper(url, instanceName, keyMappings, subjectData, method)
    return subject
}

export async function setCourse(courseData, method="POST", CourseId='') {
    const keyMappings = {}
    const instanceName = 'course'
    let url = ""
    if (method==="POST"){
     url = `http://localhost:8000/api/courses/`
    } else {
        url = `http://localhost:8000/api/courses/${CourseId}/`
    }
    const course = await instanceMappingWrapper(url, instanceName, keyMappings, courseData, method)
    return course
}



export async function getSubject(subjectId) {
    const instanceName = 'subject'
    const url = `http://localhost:8000/api/subjects/${subjectId}/`
    const subject = await getData(url, instanceName)
    return subject
}

export async function getCourseTags(subjectId="") {
    const instanceName = 'Tags'
    let url = `http://localhost:8000/api/courses/tags/`
    if (subjectId){
        url = `http://localhost:8000/api/courses/tags/?subject=${subjectId}`
    }
    const Tags = await getData(url, instanceName)
    return Tags
}

export async function getSubjectChoices() {
    const instanceName = 'subjectChoices'
    const url = `http://localhost:8000/api/courses/subject_choices/`
    const choices = await getData(url, instanceName)
    return choices
}

export async function getDocumentFiltersChoices() {
    const instanceName = 'DocumentFiltersChoices'
    const url = `http://localhost:8000/api/documents/filters_choices/`
    const choices = await getData(url, instanceName)
    return choices
}

export async function setSection(sectionData, method="POST", sectionId='') {
    const keyMappings = {}
    const instanceName = 'section'
    let url = ""
    if (method==="POST"){
     url = `http://localhost:8000/api/sections/`
    } else {
        url = `http://localhost:8000/api/sections/${sectionId}/`
    }
    const section = await instanceMappingWrapper(url, instanceName, keyMappings, sectionData, method)
    return section
}

export async function deleteDocumentApi( documentId) {
    const keyMappings = {}
    const instanceName = 'document'
    let url = `http://localhost:8000/api/documents/${documentId}/`
    const document = await instanceMappingWrapper(url, instanceName, keyMappings, {}, "DELETE")
    return document
}

export async function deleteCourseApi( courseId) {
    const keyMappings = {}
    const instanceName = 'course'
    let url = `http://localhost:8000/api/courses/${courseId}/`
    const course = await instanceMappingWrapper(url, instanceName, keyMappings, {}, "DELETE")
    return course
}

export async function deleteSectionApi( sectionId) {
    const keyMappings = {}
    const instanceName = 'section'
    let url = `http://localhost:8000/api/sections/${sectionId}/`
    const section = await instanceMappingWrapper(url, instanceName, keyMappings, {}, "DELETE")
    return section
}