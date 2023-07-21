import { server } from "../store";
import axios from "axios";
import Cookies from 'js-cookie'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${server}/api/v1/login`, { email, password }, {
      headers: {
        "content-type": "application/json"
      },
      withCredentials: true,
    });
    console.log('Response data',data)
    const token = data.token || data.user?.token || data?.user?.token;

    // Check if token exists before saving to cookie
    if (token) {
      Cookies.set('token', token, { expires: 7 }); // Set expiration (optional), here it's set to 7 days
      console.log('Received token:', token);
    } else {
      console.log('Token not found in response data.');
    }
        console.log('Token saved in cookie:',Cookies.get('token'));
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'An unknown error occurred.';
    dispatch({ type: 'loginFail', payload: errorMessage });
  }
};

export const register = (formdata) => async (dispatch) => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/api/v1/register`, formdata , {
      headers: {
        "content-type": "multipart/form-data"
      },
      withCredentials: true,
    });
    const token = data.token;
    Cookies.set('token', token, { expires: 7 }); // Set expiration (optional), here it's set to 7 days
    console.log('recieved token:',token)
    console.log(data);
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'An unknown error occurred.';
    
    dispatch({ type: 'registerFail', payload: errorMessage });
  }
};


export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type:'loadUserRequest'
      });
  
      const { data } = await axios.get(
        `${server}/api/v1/me`,
          {
        
        withCredentials: true,
      });
  
      console.log(data);
      dispatch({ type: 'loadUserSuccess', payload: data});
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An unknown error occurred.';
      
      dispatch({ type: 'loadUserFail', payload: errorMessage});
    }
  };
  

 

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: 'logoutRequest',
    });

    const { data } = await axios.get(
      `${server}/api/v1/logout`,
      {
        withCredentials: true,
      }
    );

    console.log(data);
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    dispatch({ type: 'logoutFail', payload: error.response.data.message });
  }
};

