import styles from "./_Filter.module.scss";
import { useContext } from "react";
import FiltersContext from "../../context/filtersContext";

import {
	Input,
	RadioBtn,
	RadioContainer,
	RadioOption,
	Select,
} from "../../common/form/";
import { DogIcon, CatIcon } from "../../assets/icons";

const Filter = (props) => {
	const filtersCtx = useContext(FiltersContext);
	const { filters, setFilters } = filtersCtx;

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

		props.onSubmit();
	};

	return (
		<form className={styles.filter} onSubmit={submitHandler}>
			<Input
				id="breed"
				type="text"
				label="Rasa"
				className={styles.breed}
				onChange={onInputChange}
			/>

			<RadioContainer className={styles.gender} onChange={onRadioOptionChange}>
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
			<RadioBtn
				type="radio"
				id="dog"
				value="dog"
				name="species"
				defaultChecked={filters.species === "dog"}
				className={styles.dog}
				onClick={onRadioBtnChange}
			>
				<DogIcon />
				<span>Pies</span>
			</RadioBtn>

			<RadioBtn
				type="radio"
				id="cat"
				value="cat"
				name="species"
				defaultChecked={filters.species === "cat"}
				className={styles.cat}
				onClick={onRadioBtnChange}
			>
				<CatIcon />
				<span>Kot</span>
			</RadioBtn>

			<Select
				id="age"
				name="age"
				className={styles.age}
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
			<Select
				id="weight"
				name="weight"
				className={styles.weight}
				onChange={onInputChange}
				value={filters.weight}
			>
				<option value="">Waga</option>
				<option value="0-0.5">do 1kg</option>
				<option value="1-3">1kg - 3kg</option>
				<option value="3-6">3kg - 6kg</option>
				<option value="6-10">6kg - 10kg</option>
				<option value="10-15">10kg - 15kg</option>
				<option value="15-25">15kg - 25kg</option>
				<option value="25-40">25kg - 40kg</option>
				<option value="40-999">powyżej 40kg</option>
			</Select>

			<Input
				id="adoptedAt"
				type="date"
				label="W schronisku od"
				className={styles.adoptedAt}
				onChange={onInputChange}
				value={filters.adoptedAt}
			/>
			<Input
				id="name"
				type="text"
				label="Imię"
				className={styles.name}
				onChange={onInputChange}
				value={filters.name}
			/>
			<button type="submit" className={styles["submit-btn"]}>
				Szukaj
			</button>
		</form>
	);
};

export default Filter;
