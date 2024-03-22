import { useEffect, useRef } from 'react';
import Home from './views/Home'
import gsap, { ScrollSmoother, ScrollToPlugin } from "gsap/all";

function App() {
  gsap.registerPlugin(ScrollSmoother, ScrollToPlugin);
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
      <div ref={mainContainer} id="smooth-wrapper">
        <div id="smooth-content">
          <Home />
        </div>
      </div>
    </>
  )
}

export default App
