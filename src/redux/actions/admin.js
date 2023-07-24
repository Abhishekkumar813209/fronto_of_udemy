import { server } from "../store";
import axios from "axios";


export const createCourse = (formData) => async dispatch=>{
    try{
        const config = {
            headers:{
                'Content-type':'multipart/form-data',
            },
            withCredentials:true,
        }
        dispatch({
            type:'createCourseRequest'
        })
       const {data} =  await axios.post(`${server}/api/v1/createcourse`,
       formData,
       config
       );
        dispatch({
            type:'CreateCourseSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'CreateCourseFail',
            payload:error.response.data.message,
        })
    }
}


export const deleteCourse = (id) => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'deleteCourseRequest'
        })
       const {data} =  await axios.delete(`${server}/api/v1/course/${id}`,
       
       config
       );
        dispatch({
            type:'deleteCourseSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'deleteCourseFail',
            payload:error.response.data.message,
        })
    }
}


export const addLecture = (id,formdata) => async dispatch=>{
    try{
        const config = {
            headers:{
                'Content-type':'multipart/form-data',
            },
            withCredentials:true,
        }
        dispatch({
            type:'addLectureRequest'
        })
       const {data} =  await axios.post(`${server}/api/v1/course/${id}`,
       formdata,
       config
       );
        dispatch({
            type:'addLectureSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'addLectureFail',
            payload:error.response.data.message,
        })
    }
}


export const deleteLecture = (courseId,lectureId) => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'deleteLectureRequest'

        })
       const {data} =  await axios.delete(`${server}/api/v1/lecture?courseId=${courseId}&lectureId=${lectureId}`,
       config
       );
        dispatch({
            type:'deleteLectureSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'deleteLectureFail',
            payload:error.response.data.message,
        })
    }
}


export const getAllUsers = () => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'getAllUsersRequest'
        })
       const {data} =  await axios.get(`${server}/api/v1/admin/users`,
       {},
       config
       );
        dispatch({
            type:'getAllUsersSuccess',payload:data.message
        })
    }
    catch(error){
        dispatch({
            type:'getAllUsersFail',
            payload:error.response.data.message,
        })
    }
}


export const updateUserRole = (id) => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'updateUserRoleRequest'
        })
       const {data} =  await axios.put(`${server}/api/v1/admin/user/${id}`,
       config
       );
        dispatch({
            type:'updateUserRoleSuccess',payload:data.users
        })
    }
    catch(error){
        dispatch({
            type:'updateUserRoleFail',
            payload:error.response.data.message,
        })
    }
}


export const deleteUser = (id) => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'deleteUserRequest'
        })
       const {data} =  await axios.delete(`${server}/api/v1/admin/user/${id}`,
       config
       );
        dispatch({
            type:'deleteUserSuccess',payload:data.users
        })
    }
    catch(error){
        dispatch({
            type:'deleteUserFail',
            payload:error.response.data.message,
        })
    }
}


export const getDashboardStats = (id) => async dispatch=>{
    try{
        const config = {
            withCredentials:true,
        }
        dispatch({
            type:'getAdminStatsRequest'
        })
       const {data} =  await axios.get(`${server}/api/v1/admin/stats`,
       config
       );
        dispatch({
            type:'getAdminStatsSuccess',payload:data
        })
    }
    catch(error){
        dispatch({
            type:'getAdminStatsFail',
            payload:error.response.data.message,
        })
    }
}

