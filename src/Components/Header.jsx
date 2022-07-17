import React from "react";
import { Grid } from "@mui/material";
import logo from "./crptos.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <Grid container spacing={1} className="head">
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <div className="logo">
            <img src={logo} style={{ height: "87.140625", width: "220.0" }} />
          </div>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12} >
          <div className="login-btns">
            <a
              href="https://www.cryptolearningacademy.com/login"
              className="btns"
            >
              <span className="iconBg">
                <FaLongArrowAltRight />
              </span>
              <span className="text">LOGIN!</span>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
