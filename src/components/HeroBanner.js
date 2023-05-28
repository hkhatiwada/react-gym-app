import React from "react";
import {  Container, Stack, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner6.jpg";
const HeroBanner = () => {
  return (
    <Container sx={{ mt: { lg: '212px', xs: '70px' }, ml: { lg: '200px', sm: '50px' } }} position="relative" p="20px" color="white">

      <Typography fontFamily="fantasy" color="black" fontWeight="400" fontSize="50px">
        H.K Fitness Club
      </Typography>
      <Typography
      fontFamily="cursive"
      fontWeight="300"
        sx={{ fontSize: { lg: "36px", xs: "32px" } }}
        mb="23px"
        mt="30px" color="black">
      Hustle For That Muscle
      </Typography>
      <Typography color="black" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises for your fat body 
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: "30px",
            textDecoration: "none",
            width: "200px",
            textAlign: "center",
            background: "lightblue",
            padding: "14px",
            fontSize: "22px",
            textTransform: "none",
            color: "black",
            borderRadius: "8px",
          }}
        >
          Explore Exercises
        </a>
      </Stack>
      <Typography
        fontWeight={600}
        color="black"
        sx={{
          opacity: "0.3",
          display: { lg: "block", xs: "none" },
          fontSize: "90px",
          
        }}
      >
        Workout! You Lazy Bastard.
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Container>
  );
};

export default HeroBanner;
