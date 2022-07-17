import React from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Bounce from "react-reveal/Bounce";
import { Grid } from "@mui/material";
const ArrowSection = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div className="PriceCardsSec second-main">
      {" "}
      {/* This is used For the desktop view Blue print Map*/}
      {!smallScreen && (
        <div className="container third-main  ">
          <Grid container>
            <Grid
              item
              md={12}
              lg={12}
              sx={12}
              sm={12}
              style={{ justifyContent: "center" }}
            >
              <h4>
                <span className="headz" style={{ color: "rgb(255, 189, 88)" }}>
                  HERE'S WHAT
                </span>{" "}
                <span className="headz" style={{ color: "rgb(18, 250, 37)" }}>
                  YOU
                </span>{" "}
                <span className="headz" style={{ color: "rgb(255, 189, 88)" }}>
                  GET!!!
                </span>
              </h4>
              <br />

              <br />
            </Grid>

            <Grid md={6} lg={6} sm={12} xs={12}>
              <Bounce left>
                {" "}
                <div className="youGet arrow_bg">
                  <p>
                    <span className="ps" style={{ color: " rgb(18, 250, 37)" }}>
                      Personal Coach
                    </span>
                    <span className="ps" style={{ color: " #fff" }}>
                      {" "}
                      to learn
                    </span>
                    <br />{" "}
                    <span
                      className="ps"
                      style={{ color: " rgb(255, 189, 88)" }}
                    >
                      Crypto
                    </span>
                  </p>
                </div>
              </Bounce>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $499 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $1997 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <Bounce right>
                {" "}
                <div className="youGet arrow_bgt">
                  <p>
                    <span className="ps" style={{ color: " rgb(18, 250, 37)" }}>
                      100’s
                    </span>
                    <span className="ps" style={{ color: " #fff" }}>
                      {" "}
                      of Elite Crypto
                    </span>
                    <br />{" "}
                    <span
                      className="ps"
                      style={{ color: " rgb(255, 189, 88)" }}
                    >
                      Learning Video Modules
                    </span>
                  </p>
                </div>
              </Bounce>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <Bounce left>
                {" "}
                <div className="youGet arrow_bg">
                  <p>
                    <span className="ps" style={{ color: " rgb(18, 250, 37)" }}>
                      LIVE Money Making Monday
                    </span>
                    <span className="ps" style={{ color: " #fff" }}>
                      {" "}
                    </span>
                    <br />{" "}
                    <span
                      className="ps"
                      style={{ color: " rgb(255, 189, 88)" }}
                    >
                      Weekly Calls with Q&A
                    </span>
                  </p>
                </div>
              </Bounce>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $299 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $299 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <Bounce right>
                {" "}
                <div className="youGet arrow_bgt">
                  <p>
                    <span className="ps" style={{ color: " rgb(18, 250, 37)" }}>
                      LIVE Tech Tuesday Training,
                    </span>
                    <br />{" "}
                    <span className="ps" style={{ color: " #fff" }}>
                      {" "}
                      Learn To Make $$$
                    </span>
                    <br />{" "}
                    <span
                      className="ps"
                      style={{ color: " rgb(255, 189, 88)" }}
                    >
                      Mining &Staking Crypto
                    </span>
                  </p>
                </div>
              </Bounce>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce left>  <div className="youGet arrow_bg">
            <p>
              <span className="ps" style={{ color: " rgb(18, 250, 37)" }}>
                Access to Master Life &
              </span>
              <br />{" "}
              <span className="ps" style={{ color: " #fff" }}>
                {" "}
                Business LIVE Coaching
              </span>
              <br />{" "}
              <span className="ps" style={{ color: " rgb(255, 189, 88)" }}>
                Calls Weekly
              </span>
            </p>
          </div></Bounce>
            
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $499 a month
                  </span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
      {/* This is used For the mobile view Blue print Map*/}
      {smallScreen && (
        <div className="container third-main  ">
          <Grid container>
            <Grid
              item
              md={12}
              lg={12}
              sx={12}
              sm={12}
              style={{ justifyContent: "center" }}
            >
              <h4>
                <span className="headz" style={{ color: "rgb(255, 189, 88)" }}>
                  HERE'S WHAT
                </span>{" "}
                <span className="headz" style={{ color: "rgb(18, 250, 37)" }}>
                  YOU
                </span>{" "}
                <span className="headz" style={{ color: "rgb(255, 189, 88)" }}>
                  GET!!!
                </span>
              </h4>
              <br />

              <br />
            </Grid>

            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce top><div className="youGet marrow_bg">
            <p>
              <span className="mps" style={{ color: " rgb(18, 250, 37)" }}>
                Personal Coach
              </span>
              <span className="mps" style={{ color: " #fff" }}>
                {" "}
                to learn
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " rgb(255, 189, 88)" }}>
                Crypto
              </span>
            </p>
          </div></Bounce>
              
            </Grid>

            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $499 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce top> <div className="youGet marrow_bg">
            <p>
              <span className="mps" style={{ color: " rgb(18, 250, 37)" }}>
                100’s
              </span>
              <span className="mps" style={{ color: " #fff" }}>
                {" "}
                of Elite Crypto
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " rgb(255, 189, 88)" }}>
                Learning Video Modules
              </span>
            </p>
          </div></Bounce>
             
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $1997 a month
                  </span>
                </p>
              </div>
            </Grid>

            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce top>   <div className="youGet marrow_bg">
            <p>
              <span className="mps" style={{ color: " rgb(18, 250, 37)" }}>
                LIVE Money Making Monday
              </span>
              <span className="mps" style={{ color: " #fff" }}>
                {" "}
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " rgb(255, 189, 88)" }}>
                Weekly Calls with Q&A
              </span>
            </p>
          </div></Bounce>
           
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $299 a month
                  </span>
                </p>
              </div>
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce top>  <div className="youGet marrow_bg">
            <p>
              <span className="mps" style={{ color: " rgb(18, 250, 37)" }}>
                LIVE Tech Tuesday Training,
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " #fff" }}>
                {" "}
                Learn To Make $$$
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " rgb(255, 189, 88)" }}>
                Mining &Staking Crypto
              </span>
            </p>
          </div></Bounce>
            
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $299 a month
                  </span>
                </p>
              </div>
            </Grid>

            <Grid md={6} lg={6} sm={12} xs={12}>
            <Bounce top> <div className="youGet marrow_bg">
            <p>
              <span className="mps" style={{ color: " rgb(18, 250, 37)" }}>
                Access to Master Life &
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " #fff" }}>
                {" "}
                Business LIVE Coaching
              </span>
              <br />{" "}
              <span className="mps" style={{ color: " rgb(255, 189, 88)" }}>
                Calls Weekly
              </span>
            </p>
          </div></Bounce>
             
            </Grid>
            <Grid md={6} lg={6} sm={12} xs={12}>
              <div class="text-box-plan">
                <p>
                  <span
                    className="text-box-planp"
                    style={{ color: " rgb(18, 250, 37)" }}
                  >
                    Value $499 a month
                  </span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ArrowSection;
