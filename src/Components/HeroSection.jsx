import React from "react";
import { Grid } from "@mui/material";
import logo from "./heroc.svg";
const HeroSection = () => {
  return (
    <div className="herobg" style={{ backgroundColor: "#000" }}>
      <div  >
        <Grid container spacing={2} >
          <Grid
            item
            md={6}
            lg={6}
            xs={12}
            sm={12}
            className="bestOnlineContent"
          >
            <br />
            <br />
        
            <p >
              <span className='haado' style={{ color: "#fff"  }}> THE </span>
              <span  className='haado' style={{ color: "rgb(18, 250, 37)"   }}> BEST </span>
              <span className='haado' style={{ color: "#fff"   }}> ONLINE </span>
            </p>
            <h4  className='haado' style={{  fontSize:"38px" }}>Cryptocurrency Education Platform</h4>
            <p>
              <span className='haado' style={{ color: "#fff" }}>Are you ready to take</span>{" "}
              <span  className='haado' style={{ color: "rgb(255, 189, 88)" }}>advantage</span>{" "}
              <span  className='haado' style={{ color: "#fff" }}>of the new </span>{" "}
              <span  className='haado' style={{ color: "rgb(18, 250, 37)" }}> Digital Era</span>
              <span  className='haado'style={{ color: "#fff" }}>? We've got the</span>{" "}
              <span className='haado' style={{ color: "rgb(231, 75, 134)" }}>tools</span>{" "}
              <span  className='haado'style={{ color: "#fff" }}>to make it</span>{" "}
              <span  className='haado'style={{ color: "rgb(92, 55, 208)" }}>happen</span>.
            </p>

            <a href="https://www.cryptolearningacademy.com/register" style={{textDecoration:"none"}}>JOIN NOW</a>
          </Grid>
          <Grid item md={6} lg={6} xs={12} sm={12}>
            <br />
            <br />
            <br />
            <img src={logo} className="logo" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSection;
