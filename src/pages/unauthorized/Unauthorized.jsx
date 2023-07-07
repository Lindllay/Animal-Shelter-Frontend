import styles from "./_Unauthorized.module.scss";
import { Link } from "react-router-dom";
import { url } from "../../utils/config";

const Unauthorized = () => {
	return (
		<div className={styles.unauthorized}>
			<h1>401 - Unauthorized</h1>
			<p>
				You need to <Link to={`${url}login`}>Login</Link> access this page
			</p>
		</div>
	);
};

export default Unauthorized;
