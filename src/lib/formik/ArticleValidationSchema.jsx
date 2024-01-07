import * as Yup from "yup";

export default Yup.object().shape({
  title: Yup.string()
    .max(250, "Tytuł nie może być dłuższy niż 250 znaków")
    .required("Pole wymagane"),
  introduction: Yup.string()
    .max(500, "Wstęp nie może być dłuższy niż 250 znaków")
    .required("Pole wymagane"),
  description: Yup.string().required("Pole wymagane"),
  alt: Yup.string().max(
    125,
    "Opis zdjęcia nie może być dłuższy niż 125 znaków"
  ),
  image: Yup.string().required("Proszę wybrać plik"),
  imageId: Yup.string(),
});
