import { useNavigate } from "react-router-dom";
import styles from "./_PreviousPageBtn.module.scss";
import { BsChevronLeft } from "react-icons/bs";

const PreviousPageBtn = (props) => {
  const classes = `${styles.btn} ${props.className || ""}`;
  const navigate = useNavigate();

  return (
    <button className={classes} onClick={navigate.bind(null, -1)}>
      <BsChevronLeft size={16} />
      <span>Powrót</span>
    </button>
  );
};

export default PreviousPageBtn;
