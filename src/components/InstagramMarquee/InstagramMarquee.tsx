import "./styles.scss";
import React from "react";
type InstagramMarqueeProps = {
  variant: "left" | "right";
  type?: "zwart";
  text: string;
  disable?: boolean;
  className?: string;
};
const InstagramMarquee: React.FunctionComponent<InstagramMarqueeProps> = ({
  variant,
  type,
  text,
  disable = false,
  className,
}) => {
  return (
    <a
      className={`marquee marquee-${variant} marquee-${type} ${className}`}
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
