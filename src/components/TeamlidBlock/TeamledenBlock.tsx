import "./styles.scss";
import Teamleden from "./teamleden.json";
import React from "react";

type Teamlid = {
  titel: string;
  subtitel: string;
  email: string;
};

const TeamledenBlock: React.FunctionComponent = () => {
  const teamledenElements = Teamleden?.map(
    ({ titel, subtitel, email }: Teamlid, index) => (
      <div className={`teamlid-block teamlid-block--${index % 4}`} key={index}>
        <a href={`mailto:${email}`} className="teamlid-link">
          <h4 className="mb-2">{titel}</h4>
          <p className="mb-0 opacity-75">{subtitel}</p>
        </a>
      </div>
    ),
  );

  return (
    <section className="onze-teamleden-container">
      <div className="teamleden-grid">{teamledenElements}</div>
    </section>
  );
};

export default TeamledenBlock;
