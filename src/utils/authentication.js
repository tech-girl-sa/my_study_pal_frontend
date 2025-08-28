import { redirect } from "react-router-dom"

export function getAuthToken(){
    const token = localStorage.getItem('authKey')
    return token
}

export function setAuthToken(token){
    localStorage.setItem('authKey', token)
}

export function action(){
    localStorage.removeItem('authKey');
    redirect('/')
}

export function checkLoginLoader(){
    const authKey = getAuthToken()
    
    if (!authKey){
        redirect('/login')
    }
}