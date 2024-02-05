import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { StyledNav, StyledLinks, StyledButton } from "./nav-css/navbar.css";
import { LogoImage } from "./nav-css/navbar.css";
import Pinterest from "../imgs/Pinterest_Logo.png";
import { Typography, Link } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <StyledNav>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "-10px" }}
          >
            <Link href="/">
              <LogoImage src={Pinterest} alt="Logo" />
            </Link>
            <StyledLinks href="/">Today</StyledLinks>
            <StyledLinks href="/">Watch</StyledLinks>
            <StyledLinks href="/">Shop</StyledLinks>
            <StyledLinks href="/">Explore</StyledLinks>
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "-10px" }}
          >
            <StyledLinks href="/">About</StyledLinks>
            <StyledLinks href="/">Business</StyledLinks>
            <StyledLinks href="/">Blog</StyledLinks>
            <StyledButton
              sx={{
                backgroundColor: "#E60023",
                color: "white",
                "&:hover": {
                  backgroundColor: "#990000",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Arimo', sans-serif",
                  fontSize: "16px",
                  fontWeight: 150,
                  textTransform: "none",
                }}
              >
                Log in
              </Typography>
            </StyledButton>
            <StyledButton
              sx={{
                backgroundColor: "#ECECEC",
                color: "black",
                "&:hover": {
                  backgroundColor: "#D4D4D4",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Arimo', sans-serif",
                  fontSize: "16px",
                  fontWeight: 150,
                  textTransform: "none",
                }}
              >
                Sign up
              </Typography>
            </StyledButton>
          </Box>
        </Toolbar>
      </StyledNav>
    </Box>
  );
}
