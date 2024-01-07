import styles from "./_Search.module.scss";
import { Input } from "../../form";
import navCat from "../../../assets/images/catnav.png";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import { url } from "../../../utils/config";
import SearchResults from "./SearchResults";

const Search = (props) => {
  const { searchRef } = props;

  const [enteredName, setEnteredName] = useState("");
  const [animals, setAnimals] = useState({ animals: [], count: 0 });
  const [isFocused, setIsFocused] = useState(false);
  const { isLoading, error, sendRequest } = useHttp();

  const nameInputChangeHandler = () => {
    setEnteredName(searchRef.current.value);
    setAnimals({ animals: [], count: 0 });
  };

  const getSelectedNameHandler = (name) => {
    setEnteredName(name);
  };

  const isSearchResultsOpened = enteredName.length > 0 && isFocused;

  // Debouncing
  useEffect(() => {
    const identifier = setTimeout(() => {
      if (enteredName.length === 0) return;
      sendRequest(
        { url: `${url}api/v1/animals/find/${enteredName}`, method: "get" },
        setAnimals
      );
    }, 300);
    return () => {
      console.log("Cleanup...");
      clearTimeout(identifier);
    };
  }, [enteredName]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("click", (e) => {
      if (
        e.target !== searchRef.current &&
        !e.target.closest(`.${styles.wrapper}`)
      ) {
        setIsFocused(false);
      }
    });
  }, []);

  return (
    <>
      <div className={styles["search-content"]}>
        <picture className={styles.picture}>
          <img src={navCat} alt="cat" />
        </picture>
        <Input
          className={`${styles["search-input"]} ${
            isSearchResultsOpened ? styles.focus : ""
          }`}
          label=""
          placeholder="Podaj imię zwierzęcia"
          title="search"
          ref={searchRef}
          onChange={nameInputChangeHandler}
          value={enteredName}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      <SearchResults
        isLoading={isLoading}
        isOpened={isSearchResultsOpened}
        error={error}
        data={animals}
        onClick={() => setIsFocused(false)}
        getName={getSelectedNameHandler}
      />
    </>
  );
};

export default Search;
