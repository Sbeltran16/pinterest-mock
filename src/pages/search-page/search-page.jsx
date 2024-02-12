import React from "react";
import { Grid, Typography, Box, Link } from "@mui/material";
import { StyledButton } from "../../components/navigations/nav-css/navbar.css";
import { StyledPageGrid } from "./search-page.css";
import FriedChicken from "../../components/imgs/food_cards/Breaded_Chicken_Thighs.jpg";
import FireCracker from "../../components/imgs/food_cards/firecracker_chicken.jpg";
import KoreanChicken from "../../components/imgs/food_cards/korean_chicken.jpg";
import GrilledChicken from "../../components/imgs/food_cards/grilled_chicken.jpg";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchPage() {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left side */}
      <StyledPageGrid container item xs={6}>
        <Link href="/">
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                zIndex: 3,
                height: "500px",
                width: "280px",
                top: "-220px",
                left: "-100px",
              }}
            >
              <img
                alt="chicken"
                src={FriedChicken}
                style={{
                  width: "100%",
                  height: "440px",
                  objectFit: "cover",
                  borderRadius: "3.5rem",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "-150px",
                left: "-240px",
                width: "280px",
                zIndex: 2,
              }}
            >
              <img
                alt="chicken"
                src={FireCracker}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "2.9rem",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "-300px",
                left: "100px",
                width: "180px",
                height: "220px",
                zIndex: 1,
              }}
            >
              <img
                alt="chicken"
                src={KoreanChicken}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2.9rem",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "40px",
                left: "100px",
                width: "170px",
                height: "250px",
                zIndex: 1,
              }}
            >
              <img
                alt="chicken"
                src={GrilledChicken}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2.9rem",
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -80%)",
                width: "310px",
                height: "80px",
                zIndex: 4,
                padding: "10px",
                borderRadius: "5rem",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon
                sx={{
                  fontSize: "30px",
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "10px",
                }}
              />
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "#6e0f3c",
                  fontFamily: "'Arimo', sans-serif",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                easy chicken dinner
              </Typography>
            </Box>
          </Box>
        </Link>
      </StyledPageGrid>

      {/* Right side */}
      <StyledPageGrid container item xs={6}>
        <Typography
          sx={{
            fontSize: "58px",
            color: "#c31952",
            fontWeight: "bold",
          }}
        >
          Search for an idea
        </Typography>
        <div
          sx={{
            textAlign: "center", // Center-align text
            width: "100%", // Take up the full width
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "#c31952",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            What do you want to try next?
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#c31952",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            Think of something you’re into—
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#c31952",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            like “easy chicken dinner”— and
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#c31952",
              lineHeight: "1.2",
              textAlign: "center",
            }}
          >
            see what you find.
          </Typography>
        </div>
        <StyledButton
          sx={{
            backgroundColor: "#E60023",
            color: "white",
            "&:hover": {
              backgroundColor: "#990000",
            },
            marginTop: "1rem",
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
            Explore
          </Typography>
        </StyledButton>
      </StyledPageGrid>
    </Grid>
  );
}
