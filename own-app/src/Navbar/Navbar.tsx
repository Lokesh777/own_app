import { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import DrawerComp from "./DrawerComp";
import {Link} from "react-router-dom";

const pages = [
  { path: "/home", label: "Home" },

  { path: "/product", label: "Product" },

  { path: "/about", label: "AboutUs" },

  { path: "/services", label: "Servies" }
];

export default function Navbar(): JSX.Element {
  const [value, setValue] = useState<number | false>(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  

 
  return (
    <>
      <AppBar position="static" sx={{ background: "#063960"}}>
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
              <Link to={"auth"} style={{ textDecoration: 'none',color:"white" }} >
                      <Button sx={{
                         textDecoration:"none",color:"white" }} variant="contained">
                             Login
                      </Button>
              </Link>
                
              </div>
      
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
