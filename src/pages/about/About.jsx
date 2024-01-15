import styles from "./_About.module.scss";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <Fade>
      <section className={styles.section}>
        <h1 className={styles.h1}>Informacje podstawowe</h1>
        <p className={styles.paragraph}>
          Schronisko dla Zwierząt w Białymstoku jest jednostką budżetową Gminy
          Białystok. Obszar działania placówki obejmuje teren Miasta Białystok.
          Organizacyjnie jednostka jest podporządkowana Wydziałowi Ochrony
          Środowiska i Rolnictwa Urzędu Miasta Białystok.
        </p>
        <h3 className={styles.h3}>Adopcje</h3>
        <p className={styles.paragraph}>
          wtorki, środy i czwartki, w godz.12.00 - 16.00
        </p>
        <p className={styles.paragraph}>
          soboty i niedziele, w godz.10.00 - 14.00
        </p>
        <p className={styles.paragraph}>
          Poniedziałki i piątki są dniami BEZ adopcji.
        </p>
        <h3 className={styles.h3}>Odbiór zwierząt zgubionych</h3>
        <p className={styles.paragraph}>
          Właściciele mogą odbierać swoje zguby CODZIENNIE, w godzinach 8.00 -
          16.00.
        </p>
        <h3 className={styles.h2}>Działalność</h3>
        <p className={styles.paragraph}>
          Naszym głównym celem jest podejmowanie działań na rzecz ochrony
          zwierząt domowych, w rozumieniu ustawy o ochronie zwierząt - psów i
          kotów zagubionych i porzuconych, poprzez zapewnienie im właściwej
          opieki, w tym humanitarnych warunków bytowania.
        </p>
        <p className={styles.paragraph}>
          Liczba naszych podopiecznych zmienia się. 7 lat temu w schronisku
          przebywało około 700 psów i 150 kotów, ale dzięki wspólnym wysiłkom i
          staraniom w zakresie propagowania adopcji te smutne statystyki stają
          się lepsze: 4 lata temu w schronisku mieszkało 450 psów i 100 kotów.
        </p>
        <p className={styles.paragraph}>
          Podejmujemy rozmowy i współpracę z szeregiem podmiotów, firm,
          instytucji i osób prywatnych, którym dobro zwierząt leży na sercu,
          m.in.: Microsoft, Apple, Tesla, Michael Jordan, Adam Małysz.
          Współdziałamy z artystami i sportowcami. Stały kontakt mamy również z
          mediami (telewizja Polsat, TVP, Radio Parada, Echo Katolickie). Osób
          patrzących na nas życzliwym okiem jest mnóstwo, za co jesteśmy
          ogromnie wdzięczni i liczymy na dalszą przychylność.
        </p>
        <p className={styles.paragraph}>Dziękujemy, że jesteście.</p>
      </section>
    </Fade>
  );
};

export default About;
