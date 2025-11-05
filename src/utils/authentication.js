import { redirect } from "react-router-dom"

export function getAuthToken(){
    const token = localStorage.getItem('authKey')
    return token
}

export function setAuthToken(token){
    localStorage.setItem('authKey', token)
}

export function action(){
    console.log("logout")
    localStorage.removeItem('authKey');
    return redirect('/home/')
}

export function checkLoginLoader(){
    const authKey = getAuthToken()
    
    if (!authKey){
        return redirect('/login')
    }
    return null
}