import styles from "./_LoadingSpinner.module.scss";

const LoadingSpinner = (props) => {
	const classes = `${styles.loader} ${props.className ? props.className : ""}`;

	return <div className={classes}></div>;
};

export default LoadingSpinner;
