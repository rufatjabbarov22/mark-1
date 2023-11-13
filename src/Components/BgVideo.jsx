import React from "react";
import video from "../assets/video.mp4";
import { Button } from "@mui/material";
import CarouselComponent from "../Components/HomeGraphs";
import useMediaQuery from "@mui/material/useMediaQuery";

function BgVideo() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className="bgContainer">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <div className="container">
        <h1 className="wlc">
          The smartest way to
          <br />
          manage your data
        </h1>
        <p className="ths">
          I'm a title. Click here to add your own text and edit me.
        </p>
        <div className={`centered-btn${isSmallScreen ? " mobile" : ""}`}>
          <Button variant="contained" color="secondary" sx={{ bgcolor: '#854DFF' }} className="demo">
            Request demo
          </Button>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default BgVideo;