import React, { useEffect, useRef } from "react";
import Home from "./views/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import gsap, { ScrollTrigger, ScrollSmoother, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const mainContainer = useRef();

  useEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  });

  return (
    <>
    <Navbar />
      <div ref={mainContainer} id="smooth-wrapper">
        <div id="smooth-content">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
