import React from "react";
import styles from "./_RadioContainer.module.scss";

const RadioContainer = (props) => {
	const classes = `${styles["form-row"]} ${
		props.className ? props.className : ""
	} `;

	return (
		<div className={classes} onChange={props.onChange}>
			{props.children}
		</div>
	);
};

export default RadioContainer;
