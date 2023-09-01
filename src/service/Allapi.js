import {Base_url} from './baseurl'
import {CommonRequest} from './commonRequest'

export const chatbot=async(body)=>{
    return await CommonRequest("POST",`${Base_url}/chatsdata`,body)
}

export const Allchats=async()=>{
    return await CommonRequest("GET",`${Base_url}/allchats`)
}

export const Clearchat=async()=>{
    return await CommonRequest("DELETE",`${Base_url}/clearchats`)
}