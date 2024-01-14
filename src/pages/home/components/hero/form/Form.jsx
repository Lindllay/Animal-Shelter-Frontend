import styles from "./_Form.module.scss";
import paw from "../../../../../assets/images/paw.png";
import {
  RadioBtn,
  RadioContainer,
  Select,
  RadioOption,
} from "../../../../../common/form/";
import { useContext } from "react";
import FiltersContext from "../../../../../context/filtersContext";
import { useNavigate } from "react-router-dom";

import { PiDog, PiCat } from "react-icons/pi";

const Form = () => {
  const filtersCtx = useContext(FiltersContext);
  const { filters, setFilters } = filtersCtx;

  const navigate = useNavigate();

  const onRadioBtnChange = (e) => {
    setFilters({ ...filters, species: e.target.value });
  };

  const onInputChange = (e) => {
    setFilters({ ...filters, [e.target.id]: e.target.value });
  };
  const onRadioOptionChange = (e) => {
    setFilters({ ...filters, gender: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFilters({ ...filters, name: "", weight: "", breed: "", adoptedAt: "" });

    navigate("/animals");
  };

  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-text"]}>
        <span>Nie kupuj...</span>
        <h1>Adoptuj</h1>
      </div>

      <form className={styles.form} onSubmit={submitHandler}>
        <RadioBtn
          type="radio"
          id="dog"
          name="species"
          value="dog"
          defaultChecked={filters.species === "dog"}
          className={styles["radio-btn"]}
          onClick={onRadioBtnChange}
        >
          <PiDog />
          <span>Pies</span>
        </RadioBtn>

        <RadioBtn
          type="radio"
          id="cat"
          value="cat"
          defaultChecked={filters.species === "cat"}
          name="species"
          className={styles["radio-btn"]}
          onClick={onRadioBtnChange}
        >
          <PiCat />
          <span>Kot</span>
        </RadioBtn>

        <Select
          id="age"
          name="age"
          onChange={onInputChange}
          value={filters.age}
        >
          <option value="">Wiek</option>
          <option value="0-0.5">do 6 msc</option>
          <option value="0.5-1">6 msc - 1 rok</option>
          <option value="1-3">1 rok - 3 lata</option>
          <option value="3-6">3 lata - 6 lat</option>
          <option value="6-9">6 lat - 9 lat</option>
          <option value="9-99">9+ lat</option>
        </Select>

        <RadioContainer
          className={styles.gender}
          onChange={onRadioOptionChange}
        >
          <RadioOption
            type="radio"
            id="male"
            name="gender"
            value="male"
            defaultChecked={filters.gender === "male"}
          >
            Samiec
          </RadioOption>
          <RadioOption
            type="radio"
            id="female"
            name="gender"
            value="female"
            defaultChecked={filters.gender === "female"}
          >
            Samica
          </RadioOption>
          <RadioOption
            type="radio"
            id="any"
            name="gender"
            defaultChecked={filters.gender === ""}
            value=""
          >
            Dowolna
          </RadioOption>
        </RadioContainer>
        <button className={styles["submit-btn"]}>Szukaj</button>
      </form>
      <picture className={styles["background-container"]}>
        <img src={paw} alt="" className={styles.background} />
      </picture>
    </div>
  );
};

export default Form;
