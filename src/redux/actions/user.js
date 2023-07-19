import { server } from "../store";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(`${server}/api/v1/login`, { email, password }, {
      headers: {
        "content-type": "application/json"
      },
      withCredentials: true,
    });

    console.log(data);
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'An unknown error occurred.';
    
    dispatch({ type: 'loginFail', payload: errorMessage });
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
      dispatch({ type: 'loadUserSuccess', payload: data.user});
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : 'An unknown error occurred.';
      
      dispatch({ type: 'loadUserFail', payload: errorMessage });
    }
  };
  