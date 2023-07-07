import { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";
import styles from "./_Login.module.scss";
import Input from "../../common/form/Input";
import axios from "axios";
import { url } from "../../utils/config";
import LoadingSpinner from "../../common/UI/LoadingSpinner";

const Login = () => {
	const [values, setValues] = useState({ email: "", password: "" });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { isAuthenticated, login, logout } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setError("");
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const navigateDashboard = () => {
		navigate("/dashboard");
	};

	const submitHandler = useCallback(
		async (e) => {
			e.preventDefault();

			try {
				setIsLoading(true);
				const data = await axios.post(`${url}api/v1/login`, {
					email: values.email,
					password: values.password,
				});

				const { token } = data.data;

				localStorage.setItem("token", token);
				setIsLoading(false);

				login(); // To prevent the Unauthorized page from being displayed for milliseconds after redirecting to dashboard
				navigateDashboard();
			} catch (err) {
				setIsLoading(false);
				setError(err.response.data.msg);
			}
		},
		[values]
	);

	return (
		<div className={styles["wrapper"]}>
			<h1 className={styles["heading-1"]}>Witaj</h1>
			{!isAuthenticated && (
				<>
					<p className={styles.paragraph}>
						Aby przejść do panelu administracyjnego, wprowadź odpowiednie dane:
					</p>
					<form className={styles.form}>
						<Input
							type="email"
							name="email"
							onChange={handleChange}
							className={styles["form-row"]}
						>
							Email
						</Input>
						<Input
							type="password"
							name="password"
							onChange={handleChange}
							className={styles["form-row"]}
						>
							Password
						</Input>
						{error && <p className={styles.error}>{error}</p>}
						<button
							type="submit"
							className={styles.btn}
							onClick={submitHandler}
						>
							{isLoading && <LoadingSpinner />}
							Zaloguj
						</button>
					</form>
				</>
			)}
			{isAuthenticated && (
				<>
					<p className={styles.paragraph}>Zalogowano jako Konto Testowe</p>
					<div className={styles["btn-wrapper"]}>
						<button className={styles.btn} onClick={navigateDashboard}>
							Kontynuuj
						</button>
						<button className={styles.btn} onClick={logout}>
							Wyloguj
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Login;
