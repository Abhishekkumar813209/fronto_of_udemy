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
