import * as Yup from "yup";

export default Yup.object().shape({
	name: Yup.string()
		.max(30, "Imię nie może przekraczać 30 znaków")
		.required("Pole wymagane"),
	age: Yup.number()
		.max(50, "Proszę podać realną wartość (w latach)")
		.required("Pole wymagane"),
	weight: Yup.number()
		.max(150, "Proszę podać realną wartość (w kilogramach)")
		.required("Pole wymagane"),
	gender: Yup.string(),
	breed: Yup.string()
		.max(100, "Wartość pola rasa psa nie może przekraczać 100 znaków")
		.required("Pole wymagane"),
	image: Yup.string().required("Proszę wybrać plik"),
});
