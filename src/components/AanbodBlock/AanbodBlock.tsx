import "./styles.scss";

type AanbodBlockProps = {
  className?: string;
  extraInfo?: string[];
  category: string;
  title: string;
  image: string;
};
const AanbodBlock: React.FunctionComponent<AanbodBlockProps> = ({
  className,
  extraInfo,
  category,
  title,
  image,
}) => {
  return (
    <section
      className={`aanbod-container aanbod-container-image-${image} ${className}`}
    >
      {extraInfo}
      <div className={"aanbod-container-info"}>
        <p>{category}</p>
        <h2>
          {title}
          <img src={"/lablou/assets/svg/pijl-white.svg"} />
        </h2>
      </div>
    </section>
  );
};
export default AanbodBlock;
