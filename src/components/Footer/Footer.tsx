import "../Header/styles.scss";
import "./styles.scss";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={"navbar"}>
      <span className={"nav-link"}>LOGO LABLOU</span>
      <address className={"d-flex flex-lg-row flex-column"}>
        <a
          className={"nav-link nav-link-footer"}
          href={"https://www.instagram.com/bijlablou/"}
          target={"_blank"}
        >
          Instagram
        </a>
        <a
          className={"nav-link nav-link-footer"}
          href={"https://www.facebook.com/profile.php?id=61553471590177"}
          target={"_blank"}
        >
          Facebook
        </a>
        <a
          className={"nav-link nav-link-footer"}
          href={"www.google.nl"}
          target={"_blank"}
        >
          LinkedIn
        </a>
        <a className={"nav-link nav-link-footer"} href="mailto:info@lablou.nl">
          info@lablou.nl
        </a>
      </address>
      <address>
        <a
          className={"nav-link nav-link-footer"}
          href={"https://www.google.com/maps/search/?api=1&query=Voorbeeld+12"}
          target={"_blank"}
        >
          VoorbeeldLaan
        </a>
      </address>
    </footer>
  );
};
export default Footer;
