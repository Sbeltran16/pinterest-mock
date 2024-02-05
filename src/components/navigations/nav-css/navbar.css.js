import { Link, Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledNav = styled("nav")({
  backgroundColor: "white",
  width: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  padding: "0.4rem",
});

const StyledLinks = styled(Link)({
  color: "black",
  textDecoration: "none",
  marginRight: "1.5rem",
  marginLeft: "0.5rem",
  "&:hover": {
    textDecoration: "underline",
  },
  fontFamily: "'Arimo', sans-serif",
  fontSize: "16px",
});

const StyledButton = styled(Button)({
  borderRadius: "2.8rem",
  paddingLeft: "0.7rem",
  paddingRight: "0.7rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  margin: "0.3rem",
});

const LogoImage = styled("img")({
  height: "1.5rem",
  padding: "1rem",
});

export { StyledNav, StyledLinks, LogoImage, StyledButton };
