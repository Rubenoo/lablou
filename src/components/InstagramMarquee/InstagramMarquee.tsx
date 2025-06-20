import "./styles.scss";
import React from "react";
type InstagramMarqueeProps = {
  variant: "left" | "right";
  type?: "zwart";
  text: string;
};
const InstagramMarquee: React.FunctionComponent<InstagramMarqueeProps> = ({
  variant,
  type,
  text,
}) => {
  return (
    <a
      className={`marquee marquee-${variant} marquee-${type}`}
      href={"#agenda"}
    >
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
      <h2>{text}</h2>
    </a>
  );
};
export default InstagramMarquee;
