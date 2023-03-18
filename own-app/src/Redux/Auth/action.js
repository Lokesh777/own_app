import {
  auth_signIn_error,
  auth_signIn_loading,
  auth_signIn_success,
  auth_signOut,
  auth_signUp_error,
  auth_signUp_loading,
  auth_signUp_success

} from './actionType'
import axios from 'axios';
import { API_URL } from '../../Api/Api';


export const SignInAction = (data, onSuccess, onError) =>async (dispatch) => {
  const {email, password} = data;
  dispatch({type:auth_signIn_loading});
  try{
      let res=await axios.post(`${API_URL}/user/login`, {email, password});
      console.log(res.data);
      let {token, role, error, message, username} = res.data;

      console.log(username, 'dfsdfsdfgfgdfg')
      if(error){
          dispatch({type:auth_signIn_error, payload:message});
          onError(message)
      }else{
        dispatch({type:auth_signIn_success, payload:{token, role, username}});
        console.log(username, 'onSuccess')
          onSuccess();
      }

  }catch(err){
      dispatch({type:auth_signIn_error, payload:err});
      onError(err.message)
  }
}

export const SignUpAction = (data, onSuccess, onError) =>async (dispatch) => {
  const {email, password, username, mobileNo,role} = data;
  dispatch({type:auth_signUp_loading});
  try{
      let res=await axios.post(`${API_URL}/user/signup`, {email, password, username, mobileNo,role});
      let {error, message} = res.data;

      if(error){
          dispatch({type:auth_signUp_error});
          onError(message)
      }else{
          dispatch({type:auth_signUp_success})
          onSuccess();
      }

  }catch(err){
      dispatch({type:auth_signUp_error, payload:err});
      onError(err.message)
  }
}

export const SignOut = () => {
  return ({type:auth_signOut})
}