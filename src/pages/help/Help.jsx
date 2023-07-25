import styles from "./_Help.module.scss";
import volunteeringImg from "../../assets/images/wolontariat.jpg";
import walkImg from "../../assets/images/walk.jpg";
import temporaryHomeImg from "../../assets/images/tymczasowy.jpg";

const Help = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Jak można pomóc?</h1>
      <article className={styles.article}>
        <div>
          <h2 className={styles.h2}>Wolontariat</h2>
          <p className={styles.paragraph}>
            Wolontariusze pełnią w schronisku bardzo ważną funkcję. Bez ich
            bezinteresownej pomocy, poświęcanego czasu i zaangażowania trudno
            wyobrazić sobie funkcjonowanie placówek opieki nad bezdomnymi
            zwierzakami. Do zadań wolontariuszy należy m.in.: wyprowadzenie
            zwierząt na spacery, pomoc w ich socjalizacji, pielęgnacji, treningu
            i wychowaniu, aktywne uczestnictwo w zbiórkach karm dla schroniska,
            promowanie idei adopcji zwierząt, szukanie nowych domów dla
            bezdomnych psów i kotów. Wolontariusze przechodzą specjalne
            szkolenia, które zaznajamiają ich z zasadami funkcjonowania placówek
            i przygotowują do wypełniania czekających na nich zadań.
            Wolontariusze współpracują ze schroniskiem na podstawie zawartej
            umowy.
          </p>
        </div>

        <picture className={styles.picture}>
          <img src={volunteeringImg} alt="volunteering" />
        </picture>
      </article>
      <article className={styles.article}>
        <div>
          <h2 className={styles.h2}>Spacery z psami</h2>
          <p className={styles.paragraph}>
            Spacery z psami, w przeciwieństwie do wolontariatu, są formą pomocy
            jednorazowej. Nie wymagają znacznego nakładu, czasu, dużego
            zaangażowania ani regularnych wizyt. Mogą być natomiast wspaniałym
            początkiem pomocy w schronisku i zachętą do zaangażowania się w inne
            akcje. Aby wziąć udział w spacerze, wystarczy wcześniej zgłosić chęć
            uczestnictwa telefonicznie lub za pośrednictwem internetu.
          </p>
        </div>

        <picture className={styles.picture}>
          <img src={walkImg} alt="walk" />
        </picture>
      </article>
      <article className={styles.article}>
        <div>
          <h2 className={styles.h2}>Dom tymczasowy</h2>
          <p className={styles.paragraph}>
            Nie wszystkie zwierzęta mogą bez przeszkód przebywać w schronisku.
            Psy chore, szczenięta i czworonożni seniorzy często potrzebują
            opieki w warunkach domowych, zapewniających im bezpieczeństwo i
            spokój. Schroniska poszukują osób, które są w stanie stworzyć dla
            bezdomnych zwierząt domy tymczasowe i objąć je troskliwą opieką do
            czasu znalezienia nowych opiekunów. Osoby opiekujące się zwierzętami
            pozostają w ścisłym kontakcie ze schroniskiem, które udziela im
            niezbędnej pomocy i poszukuje domu dla podopiecznych.
          </p>
        </div>

        <picture className={styles.picture}>
          <img src={temporaryHomeImg} alt="temporary home" />
        </picture>
      </article>
    </section>
  );
};

export default Help;
