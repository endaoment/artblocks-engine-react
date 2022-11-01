import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import ConnectWallet from "components/ConnectWallet";
import { StyledButton } from "./tobo/components/StyledButton";

const navItems = [
  {
    label: "Projects",
    url: "/projects",
  },
];

const DRAWER_WIDTH = 240;

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.url}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={1}
        sx={{ background: "none", borderBottom: "0px", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            margin: "auto",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <StyledButton key={item.label} href={item.url}>
                  {item.label}
                </StyledButton>
              ))}
            </Box>
          </Box>
          <Link
            href="/"
            underline="hover"
            sx={{
              color: "white",
              marginLeft: "50%",
              left: "0",
              transform: "translateX(-50%)",
              position: "absolute",
            }}
          >
            <img
              src="/img/tobo/logo.svg"
              alt="TURNOUT FOR BURNOUT"
              id="toboLogo"
            />
          </Link>
          <ConnectWallet />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
