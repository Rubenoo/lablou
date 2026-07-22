import "./styles.scss";
import React from "react";

const Vakantie: React.FunctionComponent = () => {
  return (
    <p className="vakantie-banner">
      In verband met de zomervakantie zijn wij t/m 18 augustus gesloten voor
      flexwerken en vergaderen. Voor aanvragen na 18 augustus kun je mailen naar{" "}
      <a href="mailto:hallo@lablou.nl">hallo@lablou.nl</a>. Fijne zomer!
    </p>
  );
};
export default Vakantie;
