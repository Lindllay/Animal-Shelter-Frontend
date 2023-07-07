import styles from "./_Unauthorized.module.scss";
import { Link } from "react-router-dom";

const Unauthorized = () => {
	return (
		<div className={styles.unauthorized}>
			<h1>401 - Unauthorized</h1>
			<p>
				You need to <Link to={"/login"}>Login</Link> access this page
			</p>
		</div>
	);
};

export default Unauthorized;
