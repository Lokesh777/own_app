import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from "../Redux/Auth/action";
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

const pages = [

  { path: "/products", label: "Product" },

  { path: "/games", label: "Games" },

  { path: "/quiz", label: "Quiz" },

  { path: "/admin_form", label: "Admin Form" },

  { path: "/admin_data", label: "Admin Data" }
];

export default function Navbar() {
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));  
  const dispatcher = useDispatch();
  const isAuth = useSelector(store => store.auth.data.isAuth);
  const userName = useSelector(store => store.auth.data.username);
  //dialog popup
  
  // const [    open,    setOpen] = React.useState(false);
  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };


  
//  console.log(userName,"navbar username");

  return (
    <>
      <AppBar position="static" sx={{ background: "rgb(4, 4, 37)",boxShadow: " 0px 8px 119px -6px rgba(248,231,28,0.37)"}} >
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none',color:"white" }}  >
          <Typography fontWeight="bold" fontSize="larger">
            Clone
            <TheaterComedyIcon sx={{ color: "white" }} />
          </Typography>
          </Link>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "10px" }}
                // textColor="inherit"
                value={value}
                onChange={(e, page) => setValue(page)}
                indicatorColor="secondary"
               
              >
                {pages.map((page, i) => (
                  <Link to={page.path} style={{ textDecoration: 'none',color:"white" }} key={i} >
                     <Tab key={i} label={page.label}  />
                  </Link>
                ))}
              </Tabs>
             
              <div style={{marginLeft:"auto"}}>
              
                <Link to={"auth"} style={{ textDecoration: 'none',color:"white" }} 
                 onClick={() => {
                //  handleClickOpen();
                  setValue(true)
                  dispatcher(SignOut())
                }}
                >
                        
                        <Button 
                         sx={{
                          textDecoration:"none",color:isAuth ? "white":"rgb(4, 4, 37)",backgroundColor:isAuth ? "orangered":"greenyellow",fontWeight:"bolder" }} variant="contained">
                               {isAuth ? 'Logout' : 'Login'}
                        </Button>

                </Link>
                {isAuth ?
               
                  <Button
                    sx={{ backgroundColor:"rgb(4, 4, 37)",
                    textDecoration:"none",color:"white" }} variant="contained"
                    >{userName}</Button>  : ""}
                
              </div>
      
            </>
          )}
        </Toolbar>
      </AppBar>


    {/* // popup */}
       {/* <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           If you are already using this then proceed to login otherwise just go for new registration.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}
