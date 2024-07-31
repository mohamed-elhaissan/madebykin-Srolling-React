import "../../src/App.css";
import { useState, useRef } from "react";
import gsap from "gsap";

export default function HeaderSection() {
  const [Firstspan, setFirstSpan] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateX] = useState(0);
  const [rotatingMen, setRotatingMenu] = useState(0);
  const menuAnimation = useRef(null);

  let animated = false;
  function animtedMenu() {
    if (!animated) {
      setFirstSpan(45);
      setOpacity(0);
      setTranslateX(-10);
      setRotatingMenu(360);
      animated = true;
      gsap.to(menuAnimation.current, {
        opacity: 1,
        ease: "power4",
        x: -500,
      });
      gsap.to(menuAnimation.current.children, {
        opacity: 1,
        y: 0,
        ease: "power4",
        duration: 1,
        stagger: {
          amount: 1,
          from: "top",
        },
      });
    } else {
      setFirstSpan(0);
      setOpacity(1);
      setTranslateX(0);
      setRotatingMenu(0);
      animated = false;
      gsap.to(menuAnimation.current, {
        opacity: 0,
        ease: "power4",
        x: 500,
      });
      gsap.to(menuAnimation.current.children, {
        opacity: 0,
        y: -100,
        ease: "power4",
        duration: 1,
        stagger: {
          amount: 1,
          from: "top",
        },
      });
    }
  }
  return (
    <header>
      <h1>Cases</h1>
      <div
        class="menu"
        onClick={animtedMenu}
        style={{
          transform: `rotate(${rotatingMen}deg)`,
          transition: "all .6s ease",
        }}
      >
        <span
          style={{
            transform: `rotate(${Firstspan}deg)`,
            transition: "all .4s ease",
          }}
        ></span>
        <span
          style={{
            opacity: `${opacity}`,
            transition: "all .3s ease",
          }}
        ></span>
        <span
          style={{
            transform: `rotate(-${Firstspan}deg) translateY(${translateY}px)`,
            transition: "all .4s ease",
          }}
        ></span>
      </div>
      <div class="leftSide" ref={menuAnimation}>
        <h2>HOME</h2>
        <h2>ABOUT</h2>
        <h2>CONTACT</h2>
        <h2>GITHUB</h2>
      </div>
    </header>
  );
}
