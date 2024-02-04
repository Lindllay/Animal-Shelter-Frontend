import styles from "./_Contact.module.scss";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <Fade>
      <section className={styles.section}>
        <h1 className={styles.h1}>Kontakt</h1>
        <div className={styles.wrapper}>
          <div className={styles.contact}>
            <div>
              <h2 className={styles.h2}>Dane teleadresowe</h2>
              <p> Schronisko Przytulisko im. Lorema Ipsuma</p>
              <p> Jednostka budżetowa m. Białystok ul.Szkolna 17</p>
              <p> 15-640 Białystok, Polska</p>
              <p> tel.: +48 000000000</p>
              <p> faks: +48 000000000</p>
              <p>e-mail: info@szkolna17.bialystok.pl</p>
              <p>SMS/MMS: 123 456 789</p>
              <p>Elektroniczna Skrzynka Podawcza ePUAP: /Szkolna/SkrytkaESP</p>
            </div>
            <div>
              <p>Nr konta dla darowizn:</p>
              <p>CitiBank Handlowy</p>
              <p>12 3456 7890 0000 0000 1234 5678</p>
            </div>
            <div>
              <p>Nr konta dla dostawców:</p>
              <p>CitiBank Handlowy</p>
              <p>12 3456 7890 0000 0000 1234 5678</p>
            </div>
            <div>
              <p>NIP: 012-34-56-789</p>
              <p>REGON: 123456789</p>
            </div>
            <div>
              <h2 className={styles.h2}>Dyrektor Schroniska</h2>
              <p>Maciej Semeniuk</p>
              <p>e-mail: dyrektor@schroniska.pl</p>
            </div>
            <div>
              <h2 className={styles.h2}>
                Zastępca Dyrektora Schroniska Kierownik Ambulatorium
              </h2>
              <p>Maciej Semeniuk</p>
              <p>e-mail: ambulatorium@schroniska.pl</p>
            </div>
            <div>
              <h2 className={styles.h2}>Koordynator Wolontariatu</h2>
              <p>Maciej Semeniuk</p>
              <p>e-mail: wolontariat@schroniska.pl</p>
            </div>
          </div>
          <MapContainer
            center={[53.123402922476416, 23.086431311737158]}
            zoom={13}
            className={styles.map}
            zoomControl={false}
          >
            <TileLayer
              attribution='<a href="https://www.openstreetmap.org/copyright"></a>contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[53.123402922476416, 23.086431311737158]} />
          </MapContainer>
        </div>
      </section>
    </Fade>
  );
};

export default Contact;
