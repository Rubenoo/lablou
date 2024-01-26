import "./styles.scss";
import React from "react";

type ImageBlockProps = {
  src: string;
  alt: string;
  className?: string;
};
const ImageBlock: React.FunctionComponent<ImageBlockProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <img
      src={`/assets/images/${src}`}
      className={`image-block ${className}`}
      alt={alt}
    />
  );
};
export default ImageBlock;
