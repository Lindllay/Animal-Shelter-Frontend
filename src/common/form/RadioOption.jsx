import React from "react";
import styles from "./_RadioOption.module.scss";

const RadioOption = (props) => {
	const classes = `${styles.option} ${props.className ? props.className : ""} `;

	return (
		<div className={classes}>
			<input
				type={props.type}
				id={props.id}
				name={props.name}
				value={props.value}
				defaultChecked={props.defaultChecked}
			></input>
			<label htmlFor={props.id}>{props.children}</label>
		</div>
	);
};

export default RadioOption;
