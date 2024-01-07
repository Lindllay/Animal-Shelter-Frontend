import styles from "./_DatabasePage.module.scss";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import RadioContainer from "../../../common/form/RadioContainer";
import RadioBtn from "../../../common/form/RadioBtn";
import { url } from "../../../utils/config";
import Animals from "./Animals";
import Articles from "./Articles";
import Modal from "../../../common/UI/modal/Modal";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const DatabasesPage = () => {
  const [data, setData] = useState([]);
  const { sendRequest, isLoading } = useHttp();
  const [category, setCategory] = useState("animals");
  const [selectedResult, setSelectedResult] = useState("");
  const [isConfirmationModalActive, setIsConfirmationModalActive] =
    useState(false);
  const { role } = useAuth();
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const categoryChangeHandler = () => {
    setCategory((prev) => (prev === "animals" ? "articles" : "animals"));
    setData([]);
  };

  const openModalHandler = (result) => {
    setSelectedResult(result);
    setIsConfirmationModalActive(true);
  };

  const closeModalHandler = () => {
    setIsConfirmationModalActive(false);
  };

  const deleteResultHandler = (result) => {
    try {
      axios.delete(`${url}api/v1/${category}/${result._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      sendRequest(
        { url: `${url}api/v1/${category}`, method: "get" },
        applyData
      );

      closeModalHandler();
    } catch (error) {
      console.log(error);
      setError(error.msg);
    }
  };

  const applyData = (data) => {
    setData(data[category]);
  };

  useEffect(() => {
    sendRequest({ url: `${url}api/v1/${category}`, method: "get" }, applyData);
  }, [category]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <RadioContainer className={styles.radioContainer}>
            <RadioBtn
              id="animals"
              value="animals"
              name="category"
              defaultChecked={category === "animals"}
              className={styles.radioBtn}
              onChange={categoryChangeHandler}
            >
              Zwierzęta
            </RadioBtn>
            <RadioBtn
              id="articles"
              value="articles"
              name="category"
              defaultChecked={category === "articles"}
              className={styles.radioBtn}
              onChange={categoryChangeHandler}
            >
              Artykuły
            </RadioBtn>
          </RadioContainer>
        </div>

        {category === "animals" ? (
          <Animals
            onModalOpen={openModalHandler}
            onModalClose={closeModalHandler}
            data={data}
            isLoading={isLoading}
          />
        ) : (
          <Articles
            onModalOpen={openModalHandler}
            onModalClose={closeModalHandler}
            data={data}
            isLoading={isLoading}
          />
        )}
      </div>
      {isConfirmationModalActive && (
        <Modal className={styles.modal} onClose={closeModalHandler}>
          <p>
            Czy na pewno chcesz usunąć
            <span>
              {` ${selectedResult[category === "animals" ? "name" : "title"]}`}?
            </span>
          </p>
          <div className={styles["btn-wrapper"]}>
            <button
              className={
                role === "admin" ? styles["btn-delete"] : styles["btn-disabled"]
              }
              onClick={deleteResultHandler.bind(null, selectedResult)}
              disabled={role !== "admin"}
            >
              Usuń
            </button>
            <button
              className={styles["btn-cancel"]}
              onClick={closeModalHandler}
            >
              Anuluj
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default DatabasesPage;
