import "./styles.scss";
import React from "react";
type InstagramMarqueeProps = {
  variant: "left" | "right";
  type?: "zwart";
};
const InstagramMarquee: React.FunctionComponent<InstagramMarqueeProps> = ({
  variant,
  type,
}) => {
  return (
    <a
      className={`marquee marquee-${variant} marquee-${type}`}
      href={"#agenda"}
    >
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2> <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2> <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
      <h2>PROGRAMMA & EVENTS</h2>
    </a>
  );
};
export default InstagramMarquee;
