import styles from "./_RadioBtn.module.scss";

const RadioBtn = (props) => {
	const classes = `${styles["form-row"]} ${
		props.className ? props.className : ""
	} `;

	const passSelectedOption = (e) => {
		props.onClick(e.target.value);
	};

	return (
		<div className={classes}>
			<input
				type={props.type}
				id={props.id}
				name={props.name}
				defaultChecked={props.defaultChecked}
				value={props.value}
				onClick={props.onClick}
			></input>
			<label htmlFor={props.id}>{props.children}</label>
		</div>
	);
};

export default RadioBtn;
