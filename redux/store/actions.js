import { SETUSERNAME , SETUSERAGE } from "./actionType";



export const setName = (value)  => {
    return{
        type:SETUSERNAME,
        payload:value
    }
}



export const setAge = (value)  => {
    return{
        type:SETUSERAGE,
        payload:value
    }
}
