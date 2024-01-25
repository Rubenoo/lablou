import "./styles.scss";
import React from "react";
type InstagramMarqueeProps = {
  variant: "left" | "right";
};
const InstagramMarquee: React.FunctionComponent<InstagramMarqueeProps> = ({
  variant,
}) => {
  return (
    <a
      className={`marquee marquee-${variant}`}
      href={"https://www.instagram.com/bijlablou/"}
      target={"_blank"}
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
