import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./_Login.module.scss";
import Input from "../../common/form/Input";
import axios from "axios";
import { url } from "../../utils/config";
import LoadingSpinner from "../../common/UI/LoadingSpinner";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated, setRole, logout, role } = useAuth();

  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setError("");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return setError("Missing Username or Password");
    }

    try {
      setIsLoading(true);
      const response = await axios.post(`${url}api/v1/login`, {
        email: values.email,
        password: values.password,
      });
      const { token, role } = response?.data;

      localStorage.setItem("token", token);
      setRole(role);
      setIsLoading(false);
      navigateDashboard();
    } catch (error) {
      console.log(error);
      if (error.response?.status === 400) {
        setError("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setError("Wrong credentials");
      } else {
        setError("Login Failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setError("");
  }, [values]);

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
              {isLoading && <LoadingSpinner className={styles.spinner} />}
              Zaloguj
            </button>
          </form>
        </>
      )}
      {isAuthenticated && (
        <>
          <p className={styles.paragraph}>
            Zalogowano jako
            {` ${role === "admin" ? "Administrator" : "Konto Testowe"}`}
          </p>
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
