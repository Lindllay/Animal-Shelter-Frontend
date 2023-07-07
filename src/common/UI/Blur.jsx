import styles from "./_Blur.module.scss";

const Blur = (props) => {
	return <div className={styles.blur}>{props.children}</div>;
};

export default Blur;
