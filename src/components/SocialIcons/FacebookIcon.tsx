import "./styles.scss";

const FacebookIcon: React.FunctionComponent = () => {
  return (
    <a target="_blank" href="https://www.facebook.com/lablou">
      <img
        alt="facebook icoon"
        className="social-icon"
        src="/assets/svg/facebook.svg"
      />
    </a>
  );
};
export default FacebookIcon;
