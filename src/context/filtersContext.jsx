import { createContext, useState } from "react";

const FiltersContext = createContext();

export const FiltersContextProvider = (props) => {
	const [filters, setFilters] = useState({
		name: "",
		age: "",
		weight: "",
		breed: "",
		gender: "",
		adoptedAt: "",
		species: "dog",
	});

	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{props.children}
		</FiltersContext.Provider>
	);
};

export default FiltersContext;
