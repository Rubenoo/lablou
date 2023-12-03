import "./styles.scss";

const InstagramIcon: React.FunctionComponent = () => {
  return (
    <a target="_blank" href="https://www.instagram.com/lablou">
      <img
        alt="instagram icoon"
        className="social-icon"
        src="/assets/svg/instagram.svg"
      />
    </a>
  );
};
export default InstagramIcon;
