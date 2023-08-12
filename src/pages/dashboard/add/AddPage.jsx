import styles from "./_AddPage.module.scss";
import AddAnimal from "./AddAnimal";
import AddArticle from "./AddArticle";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

const AddPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.wrapper}>
              <Link to="animal">
                <button className={styles.btn}>Dodaj zwierzę</button>
              </Link>
              <Link to="article">
                <button className={styles.btn}>Dodaj artykuł</button>
              </Link>
            </div>
          }
        />

        <Route path="/animal" element={<AddAnimal />} />
        <Route path="/article" element={<AddArticle />} />
      </Routes>
    </>
  );
};

export default AddPage;
