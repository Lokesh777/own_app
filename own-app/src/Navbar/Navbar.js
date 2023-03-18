import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { SignOut } from "../Redux/Auth/action";

const pages = [
  { path: "/home", label: "Home" },

  { path: "/products", label: "Product" },

  { path: "/games", label: "Games" },

  { path: "/quiz", label: "Quiz" },

  { path: "/services", label: "Servies" }
];

export default function Navbar() {
  const [value, setValue] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  const dispatcher = useDispatch();
  const isAuth = useSelector(store => store.auth.data.isAuth);
  const userName = useSelector(store => store.auth.data.username);
  
  
 console.log(userName,"navbar username");

  return (
    <>
      <AppBar position="static" sx={{ background: "rgb(4, 4, 37)"}}>
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
                  setValue(true)
                  dispatcher(SignOut())
                }}
                >
                        
                        <Button sx={{
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
    </>
  );
}
