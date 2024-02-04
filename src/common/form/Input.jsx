import React from "react";
import styles from "./_Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles["form-row"]} ${
    props.className ? props.className : ""
  } ${props.error && props.touched ? styles.error : ""} `;

  return (
    <>
      <div className={classes}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onClick={props.onClick}
          onMouseUp={props.onMouseUp}
          ref={ref}
          name={props.name}
          placeholder={props.placeholder}
          title={props.title}
        />
        {props.type !== "file" && props.error && props.touched && (
          <p className={styles["error-message"]}>{props.error}</p>
        )}
        {props.type === "file" && !props.showError && props.touched && (
          <p className={styles["error-message"]}>{props.error}</p>
        )}
      </div>
    </>
  );
});

export default Input;
