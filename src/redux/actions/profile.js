import {server} from "../store";
import axios from "axios";


export const updateProfile = (name,email) => async dispatch=>{
    try{
        dispatch({
            type:'updateProfileRequest'
        })
       const {data} =  await axios.put(`${server}/api/v1/updateprofile`, 
       {
        name,
        email
       },
       {
        headers: {
          "content-type": "application/json"
        },
        withCredentials: true,
      })

        dispatch({
            type:'updateProfileSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'updateProfileFail',
            payload:error.response.data.message,
        })
    }
}

export const updateProfilePicture = (formdata) => async dispatch=>{
    try{
        dispatch({
            type:'updateProfileRequest'
        })
       const {data} =  await axios.put(`${server}/api/v1/updateprofilepicture`, 
        formdata,
       {
        headers: {
          "content-type": "multipart/form-data"
        },
        withCredentials: true,
      })

        dispatch({
            type:'updateProfilePictureSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'updateProfilePictureFail',
            payload:error.response.data.message,
        })
    }
}



export const changePassword = (oldPassword,newPassword) => async dispatch=>{
    try{
        dispatch({
            type:'changePasswordRequest'
        })
       const {data} =  await axios.put(`${server}/api/v1/changepassword`, 
       {
        oldPassword,
        newPassword
       },
       {
        headers: {
          "content-type": "application/json"
        },
        withCredentials: true,
      })

        dispatch({
            type:'changePasswordSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'changePasswordFail',
            payload:error.response.data.message,
        })
    }
}

export const changePasswordFail = (error) => ({
    type: 'changePasswordFail',
    payload: error, // Pass the error message received from the backend
  });