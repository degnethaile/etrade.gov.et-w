/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <nav style={{ background: '#00796b', padding: '10px', width: '500px' }}>
      <div className="nav" style={{color: 'white'}}>
        {/* <img src={Logo} alt="" /> */}
        የንግድና ቀጣናዊ ትስስር ሚኒስቴር  Ministry of Trade and Regional Integratior <br />
        <p style={{ marginLeft: '10.5rem'}}> አማርኛ</p>

      </div>
      
      {/* <div className="navbar-links-container">
        <HiOutlineBars3 onClick={handleDrawerOpen} className="menu-icon" />
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          ModalProps={{ onBackdropClick: handleDrawerClose }}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={handleDrawerClose}
            onKeyDown={handleDrawerClose}
          >
            <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button key="Info">
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Info" />
              </ListItem>
              <ListItem button key="Comment">
                <ListItemIcon>
                  <CommentRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Comment" />
              </ListItem>
              <ListItem button key="Phone">
                <ListItemIcon>
                  <PhoneRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Phone" />
              </ListItem>
              <ListItem button key="Cart">
                <ListItemIcon>
                  <ShoppingCartRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div> */}
    </nav>
  );
};

export default Navbar;
