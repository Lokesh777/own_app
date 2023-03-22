import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";

import {Link} from "react-router-dom";import MenuIcon from '@mui/icons-material/Menu';

const pages = [

  { path: "/products", label: "Product" },

  { path: "/games", label: "Games" },

  { path: "/quiz", label: "Quiz" },

  { path: "/admin_form", label: "Admin Form" },

  { path: "/admin_data", label: "Admin Data" },

  { path: "/auth", label: "Login" },
];

export default function DrawerComp(): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  // const pages: string[] = ["Products", "Services", "Supports", "Abouts", "Login", "Signup"];

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
             <Link to={page.path} style={{ textDecoration: 'none',color:"white" }} key={index} >
                  
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>{page.label}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>

      <IconButton sx={{ marginLeft: "auto", color: "white" }} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
