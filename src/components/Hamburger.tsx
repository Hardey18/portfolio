import React, { useRef, useEffect, FC } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from "./Animations";

type StateProps = {
    state: any
}

const Hamburger: FC<StateProps> = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer: any = useRef(null);
  let reveal1: any = useRef(null);
  let reveal2: any = useRef(null);
  let line1: any = useRef(null);
  let line2: any = useRef(null);
  let line3: any = useRef(null);
  let line4: any = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
    //   fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
        <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e: any) => handleHover(e)}
                      onMouseOut={(e: any) => handleHoverExit(e)}
                      ref={(el: any) => (line1 = el)}
                      to='/'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e: any) => handleHover(e)}
                      onMouseOut={(e: any) => handleHoverExit(e)}
                      ref={(el: any) => (line2 = el)}
                      to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e: any) => handleHover(e)}
                      onMouseOut={(e: any) => handleHoverExit(e)}
                      ref={(el: any) => (line3 = el)}
                      to='/portfolio'>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e: any) => handleHover(e)}
                      onMouseOut={(e: any) => handleHoverExit(e)}
                      ref={(el: any) => (line4 = el)}
                      to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
