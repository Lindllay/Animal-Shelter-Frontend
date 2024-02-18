import React from "react";
import styles from "./_Select.module.scss";

const Select = (props) => {
  const classes = `${styles.select} ${props.className ? props.className : ""}`;

  return (
    <>
      <select
        id={props.id}
        name={props.name}
        className={classes}
        onChange={props.onChange}
        value={props.value}
        title={props.title}
      >
        {props.children}
      </select>
    </>
  );
};

export default Select;
