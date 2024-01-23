import "../Header/styles.scss";
import "./styles.scss";
import React from "react";
import Logo from "../Logo/Logo.tsx";

const Footer: React.FunctionComponent = () => {
  return (
    <footer className={"navbar"}>
      <Logo className={"nav-link nav-link-footer"} variant={"footer"} />
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
          href={"https://www.linkedin.com/company/stadslab-zeist/"}
          target={"_blank"}
        >
          LinkedIn
        </a>
        <a className={"nav-link nav-link-footer"} href="mailto:hallo@lablou.nl">
          hallo@lablou.nl
        </a>
      </address>
      <address>
        <a
          className={"nav-link nav-link-footer"}
          href={
            "https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
          }
          target={"_blank"}
        >
          Weteringlaan 1, De Bilt
        </a>
      </address>
    </footer>
  );
};
export default Footer;
