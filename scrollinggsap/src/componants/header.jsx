import "../../src/App.css";
import { useState } from "react";
export default function HeaderSection() {
  const [Firstspan, setFirstSpan] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateX] = useState(0);
  const [rotatingMen, setRotatingMenu] = useState(0);
  let animated = false;
  function animtedMenu() {
    if (!animated) {
      setFirstSpan(45);
      setOpacity(0);
      setTranslateX(-10);
      setRotatingMenu(360);
      animated = true;
    } else {
      setFirstSpan(0);
      setOpacity(1);
      setTranslateX(0);
      setRotatingMenu(0);
      animated = false;
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
          transition : "all .6s ease"
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
    </header>
  );
}
