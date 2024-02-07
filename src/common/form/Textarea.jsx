import React, { useEffect } from "react";
import styles from "./_Textarea.module.scss";

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles["form-row"]} ${
    props.className ? props.className : ""
  } ${props.error && props.touched ? styles.error : ""} `;

  useEffect(() => {
    const textarea = document.getElementById(props.id);

    textarea.addEventListener("keydown", (e) => {
      let scHeight = e.target.scrollHeight;
      textarea.style.height = scHeight + "px";
    });
    textarea.addEventListener("keyup", (e) => {
      let scHeight = e.target.scrollHeight;
      textarea.style.height = scHeight + "px";
    });
  });

  return (
    <>
      <div className={classes}>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          ref={ref}
          name={props.name}
        />
        {props.error && props.touched && (
          <p className={styles["error-message"]}>{props.error}</p>
        )}
      </div>
    </>
  );
});

export default Input;
