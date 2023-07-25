import styles from "./_Questions.module.scss";
import catImage from "../../../../assets/images/cat-questions.png";
import questionMark from "../../../../assets/questionMark.png";
import { useNavigate } from "react-router-dom";
const Questions = () => {
  const navigate = useNavigate();

  const navigateToContactHandler = () => {
    navigate("/contact");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <h2 className={styles.h2}>
          Masz pytania
          <picture>
            <img src={questionMark} alt="question mark" />
          </picture>
        </h2>

        <h3 className={styles.h3}>Chętnie udzielimy Ci odpowiedzi!</h3>
        <button className={styles.button} onClick={navigateToContactHandler}>
          Skontaktuj się z nami
        </button>
      </div>
      <picture className={styles.picture}>
        <img src={catImage} alt="cat" />
      </picture>
    </section>
  );
};

export default Questions;
