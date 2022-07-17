import React from "react";
import { Grid } from "@mui/material";
const Footer = () => {
  return (
    <Grid container className="second-main PriceCardsSec">
      <div className="container">
        <Grid container className="row SignUp">
          {" "}
          <Grid item lg={3} md={3} xs={12} sm={12}>
            <img
              className="imgf"
              src="https://www.cryptolearningacademy.com/images/question_orange.svg"
              alt=""
            />
          </Grid>
          <Grid item lg={9} md={9} xs={12} sm={12}>
            <h4>Sign Up Now!</h4>
          </Grid>
        </Grid>
        <Grid container className="  row">
          {" "}
         
          <Grid item lg={9} md={9} xs={12} sm={12} className="yellow-btns" >
            <a href="https://www.cryptolearningacademy.com/register">
              CLICK HERE
            </a>
          </Grid>
          <Grid item lg={3} md={3} xs={12} sm={12} className="yellow-img">
            <img
              className="imgf"
              src="https://www.cryptolearningacademy.com/images/question_yellow.svg"
            />
          </Grid>
        </Grid>

        <Grid container className="row SignUp">
          {" "}
          <Grid item lg={3} md={3} xs={12} sm={12}>
            <img
              className="imgf"
              src="https://www.cryptolearningacademy.com/images/question_purple.svg"
              alt=""
            />
          </Grid>
          <Grid item lg={9} md={9} xs={12} sm={12}></Grid>
        </Grid>
        <hr class="dmDivider2"></hr>

        <Grid container className="row SignUp">
          <div class="copyright">
            <p>
              <span>© 2022 </span> All Rights Reserved | Crypto Learning Academy
            </p>
          </div>
        </Grid>
      
        <a
        href="https://www.cryptolearningacademy.com/register"
        class="bottom-btn"
        
      >
        CLICK HERE
      </a>
      </div>
    </Grid>
  );
};

export default Footer;
