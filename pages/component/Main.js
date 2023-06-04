import React from "react";
import Typewriter from "typewriter-effect";
import { Box, Container, Typography } from "@mui/material";
const Main = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        height="84vh">
        <Box width="44%" className="main">
          <Typography variant="h2">I am a</Typography>
          <Typography variant="h2">
            <Typewriter
              options={{
                strings: [
                  "Web Designer",
                  "Web Developer",
                  "Front-end Developer",
                  "WordPress Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Typography variant="span">
            Welcome to my portfolio! My name is MD.AL-AMIN and I am a
            professional experienced web developer specializing in Modern
            technologies. On this website, you will find a selection of my most
            recent and notable projects, as well as information about my
            background and skills. Please feel free to explore and contact me if
            you have any questions or would like to work together. Thank you for
            visiting. I hope you enjoy your stay!
          </Typography>
        </Box>
        <Box>
          <img src="mdalamin.png" alt="mdalamin" width={450} height={350} />
        </Box>
      </Box>
    </>
  );
};

export default Main;
