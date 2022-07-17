import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import SCards from "./Components/SCards";
import PriceCardsSec from "./Components/PriceCardsSec";
import Footer from "./Components/Footer";
import ArrowSection from "./Components/ArrowSection";

import "./App.css";
import theme from "./Theme";

const App = () => {
  return (
    <div>
     
      <ThemeProvider theme={theme}>
        <Header />
        <HeroSection />
        <SCards />
        <ArrowSection />
        <PriceCardsSec />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
