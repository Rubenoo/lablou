import "./styles.scss";
import React from "react";
import ContactOpnemenKnop from "../../components/ContactOpnemenKnop/ContactOpnemenKnop.tsx";

const Contact: React.FunctionComponent = () => {
  return (
    <main className="contact-container">
      <div className="contact-header">
        <h1 className="py-2 py-lg-5">Contact & bereikbaarheid</h1>
      </div>

      <div className="contact-grid">
        {/* Contact Details Section */}
        <section className="contact-section">
          <h2>Contact gegevens</h2>
          <div className="contact-info">
            <div className="lab-info">
              <h3>Lab Lou</h3>
              <div className="contact-item">
                <b>Adres:</b>

                <ContactOpnemenKnop
                  href="https://www.google.com/maps/search/?api=1&query=Weteringlaan+1,+3732HZ+De+Bilt"
                  target="_blank"
                  variant="zwart"
                >
                  Weteringlaan 1, 3732 HZ De Bilt
                </ContactOpnemenKnop>
              </div>
              <div className="contact-item">
                <b>Telefoon:</b>
                <ContactOpnemenKnop href="tel:0628277642" variant="zwart">
                  06 28277642
                </ContactOpnemenKnop>
              </div>
            </div>
          </div>
        </section>

        {/* Email Section */}
        <section className="contact-section">
          <h2>Email contact</h2>
          <div className="email-list">
            <div className="email-item">
              <b>Dagverhuur en algemene informatie:</b>
              <ContactOpnemenKnop href="mailto:hallo@lablou.nl" variant="zwart">
                hallo@lablou.nl
              </ContactOpnemenKnop>
            </div>
            <div className="email-item">
              <b>Programma en communicatie:</b>
              <ContactOpnemenKnop
                href="mailto:programma@lablou.nl"
                variant="zwart"
              >
                programma@lablou.nl
              </ContactOpnemenKnop>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="contact-section">
          <h2>Social media</h2>
          <div className="social-info">
            <div className="social-item">
              <b>Instagram:</b>
              <ContactOpnemenKnop
                href="https://www.instagram.com/bijlablou/"
                target="_blank"
                variant="roze"
              >
                @bijlablou
              </ContactOpnemenKnop>
            </div>
          </div>
        </section>

        {/* Opening Hours Section */}
        <section className="contact-section">
          <h2>Openingstijden</h2>
          <div className="hours-info">
            <b>Reguliere tijden:</b>
            <p>Maandag t/m vrijdag van 9:00 tot 17:00 uur</p>
            <b>Overige tijden:</b>

            <p> Op aanvraag of tijdens activiteiten</p>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="contact-section">
          <h2>Toegankelijkheid</h2>
          <div className="accessibility-info">
            <p>✓ Rolstoeltoegankelijk toilet aanwezig</p>
            <p>✓ (Hulp)honden zijn welkom</p>
            <p>✓ Lab Lou is een MUP (Menstruatieproducten Uitgifte Punt)</p>
            <p>✓ Lab Lou is aangesloten bij de HogeNood app</p>
          </div>
        </section>

        {/* Parking & Transport Section */}
        <section className="contact-section">
          <h2>Parkeren & vervoer</h2>
          <div className="transport-info">
            <div className="transport-item">
              <b>Parkeren:</b>
              <p>Parkeerplaatsen op eigen terrein</p>
            </div>
            <div className="transport-item green-transport">
              <b>🌱 Duurzaam reizen (aanbevolen):</b>
              <p>
                We vinden het nóg fijner als je GROEN reist en met de fiets of
                het OV komt!
              </p>
            </div>
            <div className="transport-item">
              <b>Openbaar vervoer:</b>
              <p>
                Bus 74 stopt voor de deur - halte Kwikstaartlaan
                <br />
                Zowel vanuit Utrecht als vanaf Station Driebergen-Zeist
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
