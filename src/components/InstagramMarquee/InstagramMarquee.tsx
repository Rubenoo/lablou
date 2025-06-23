import "./styles.scss";
import React from "react";
type InstagramMarqueeProps = {
  variant: "left" | "right";
  type?: "zwart";
  text: string;
  disable?: boolean;
};
const InstagramMarquee: React.FunctionComponent<InstagramMarqueeProps> = ({
  variant,
  type,
  text,
  disable = false,
}) => {
  return (
    <a
      className={`marquee marquee-${variant} marquee-${type}`}
      {...(!disable && { href: "#agenda" })}
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
