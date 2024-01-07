import styles from "./_InfoCard.module.scss";
import useAuth from "../../../hooks/useAuth";
import { IoIosInformationCircleOutline } from "react-icons/io";

const InfoCard = () => {
  const { role } = useAuth();

  const isAdmin = role === "admin";

  return (
    !isAdmin && (
      <div className={styles.card}>
        <IoIosInformationCircleOutline size={30} className={styles.icon} />
        <div className={styles.info}>
          Konto Testowe. Dostęp do niektórych funkcji panelu jest ograniczony.
        </div>
      </div>
    )
  );
};

export default InfoCard;
