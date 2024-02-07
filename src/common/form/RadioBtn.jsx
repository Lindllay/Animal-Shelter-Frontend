import styles from "./_RadioBtn.module.scss";

const RadioBtn = (props) => {
  const classes = `${styles["form-row"]} ${
    props.className ? props.className : ""
  } `;

  return (
    <div className={classes}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        defaultChecked={props.defaultChecked}
        value={props.value}
        onClick={props.onClick}
        onChange={props.onChange}
      ></input>
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

export default RadioBtn;
