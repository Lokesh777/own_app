import { useState } from 'react';
import { TextField, Button, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { SignInAction, SignUpAction } from '../Redux/Auth/action';

const initialFormData = {
  username: "",
  email: "",
  password: "",
  mobileNo: "",
  role: ""
};

export default function Authentication() {
  const [loginSignup, setLoginSignup] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const navigator = useNavigate();
  const dispatcher = useDispatch();

  const signupSuccess = () => {
    alert('Signup Successfully');
    clearForm();
    setLoginSignup(!loginSignup);
  }

  const loginError = (message) => {
    alert(message);
  }

  const loginSuccess = () => {
    alert('Login Successfully');
    clearForm();
    navigator('/')
  }

  const signupError = (message) => {
    alert('signup Successfully',message);
    // console.log(message);
    // navigator('/')
    setLoginSignup(!loginSignup);
  }

  const clearForm = () => {
    setFormData(initialFormData)
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatcher(SignInAction(formData,formData.name, loginSuccess, loginError));
  }

  const signupSubmit = (e) => {
    e.preventDefault();
    dispatcher(SignUpAction(formData, signupSuccess, signupError));
  }



  // events and functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }


  



  return (
    
    <form onSubmit={loginSignup ? signupSubmit:loginSubmit}
    >
      <Box 
          display="flex" 
          flexDirection={"column"}
          maxWidth={400} 
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          boxShadow="5px 5px 10px #ccc"
          borderRadius={5}
          padding={4}
          marginTop={2}
          sx={{
            ":hover":{
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            }
          }}
        >
       <Typography fontWeight={600} fontSize={30}>
       {loginSignup?"Signup":"Login" }
        </Typography>
         
     { loginSignup&& <TextField
       margin="normal"
        variant="outlined"
        label="username"
        name='username'
        value={formData.username}
        onChange={handleChange}
         
      />}
      <TextField
       margin="normal"
       variant="outlined"
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
         
      />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          
        />
 {  loginSignup &&  
      <TextField
        variant="outlined"
        label="mobile number"
        type="mobileNo"
        name="mobileNo"
        value={formData.mobileNo}
        onChange={handleChange}
        required
      />
}
       
         <FormControl sx={{ m: 1, minWidth: 225 }}>
            <InputLabel>Role</InputLabel>
            <Select 
              variant="outlined"
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
            </Select>
          </FormControl>

        <Button 
        sx={{marginTop:"5px"}}
        variant="contained" color="warning" type="submit">
          Submit
        </Button>

        <Typography onClick={()=>setLoginSignup(!loginSignup)} 
         paddingTop={1} sx={{fontWeight:"bolder"}} > 
         Change to {loginSignup ? "Login":"Signup"}
         </Typography>
     
      </Box>
    </form>
  );
};


