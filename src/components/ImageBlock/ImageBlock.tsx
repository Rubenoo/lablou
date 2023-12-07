import "./styles.scss";
import React from "react";

type ImageBlockProps = {
  src: string;
  alt: string;
};
const ImageBlock: React.FunctionComponent<ImageBlockProps> = ({ src, alt }) => {
  return <img src={src} className={"image-block"} alt={alt} />;
};
export default ImageBlock;
