import React from "react";
import { Grid } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import VideoPlayer from "./VideoPlayer";
import Zoom from "react-reveal/Zoom";
const SCards = () => {
  return (
    <div className="second-main">
      <Grid container className="row">
        <h4>
          <span className="headzz" style={{ color: "rgb(0, 200, 252)" }}>
            3 THINGS
          </span>{" "}
          <span className="headzz" style={{ color: "#fff" }}>
            YOU CAN DO
          </span>{" "}
          <span className="headzz" style={{ color: "rgb(18, 250, 37)" }}>
            RIGHT NOW
          </span>{" "}
          <span className="headzz" style={{ color: "#fff" }}>
            WITH CLA!
          </span>
        </h4>
      </Grid>

      <div className="container">
        <Grid
          container
          spacing={1}
          className="scards"
         
        >
          <Grid item md={12} lg={4} xs={12} sm={12}>
            <Zoom top>
              {" "}
              <MDBCard
                style={{
                  maxWidth: "25rem",
                  backgroundColor: "#1e2329",
                  marginTop: "60px",
                  borderRadius: "26px",
                }}
                className="herobgs three-things-box"
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://www.cryptolearningacademy.com/images/coin-creator-114w.webp"
                    fluid
                    alt="..."
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "23px",
                      color: "#fff",
                    }}
                  >
                    Learn How To Buy, Sell, & Trade
                  </h3>
                </MDBCardBody>
              </MDBCard>
            </Zoom>
          </Grid>
          <Grid item md={12} lg={4} xs={12} sm={12} style={{}}>
            <Zoom top>
              {" "}
              <MDBCard
                style={{
                  maxWidth: "25rem",
                  backgroundColor: "#1e2329",
                  marginTop: "60px",
                  borderRadius: "25px",
                }}
                className="herobgs three-things-box"
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://www.cryptolearningacademy.com/images/buy-cryptocurrencies.webp"
                    fluid
                    alt="..."
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "23px",
                      color: "#fff",
                    }}
                  >
                    Earn Crypto Daily
                  </h3>
                </MDBCardBody>
              </MDBCard>
            </Zoom>
          </Grid>
          <Grid item md={12} lg={4} xs={12} sm={12}>
            <Zoom top>
              {" "}
              <MDBCard
                style={{
                  maxWidth: "25rem",
                  backgroundColor: "#1e2329",
                  marginTop: "60px",
                  borderRadius: "25px",
                }}
                className="herobgs three-things-box"
              >
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage
                    src="https://www.cryptolearningacademy.com/images/three-things-icon.webp"
                    fluid
                    alt="..."
                  />
                </MDBRipple>
                <MDBCardBody>
                  <h3
                    style={{
                      fontWeight: "700",
                      fontSize: "23px",
                      color: "#fff",
                    }}
                  >
                    Crypto Education
                  </h3>
                </MDBCardBody>
              </MDBCard>
            </Zoom>
          </Grid>
        </Grid>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="container">
          <Grid container className="video-section">
            <Grid item md={12} lg={12}>
              <VideoPlayer />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SCards;
