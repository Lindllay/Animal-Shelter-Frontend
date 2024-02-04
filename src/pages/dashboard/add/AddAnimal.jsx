import styles from "./_AddAnimal.module.scss";
import { Input, Textarea } from "../../../common/form";
import LoadingSpinner from "../../../common/UI/LoadingSpinner";
import { useFormik } from "formik";
import animalValidationSchema from "../../../lib/formik/AnimalValidationSchema";
import { useState } from "react";
import { Select } from "../../../common/form";
import useAuth from "../../../hooks/useAuth";
import { uploadData } from "../../../utils/api";

let formDataImage;

const AddAnimal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasImage, setHasImage] = useState(false);
  const { role } = useAuth();

  const initialValues = {
    name: "",
    age: "",
    weight: "",
    breed: "",
    species: "dog",
    gender: "male",
    adoptedAt: "",
    description: "",
    imageSrc: "",
    imageSrcSmall: "",
    imageId: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues,
      validationSchema: animalValidationSchema,
      onSubmit: async (values) => {
        try {
          setIsLoading(true);
          await uploadData(values, formDataImage, "animals");
          handleReset();
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      },
    });

  const handleImage = (e) => {
    const imageFile = e.target.files[0];
    formDataImage = new FormData();
    formDataImage.append("image", imageFile);
    values.image = e.target.value;
    setHasImage(e.target.value);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          id="name"
          type="text"
          label="Imię*"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
          touched={touched.name}
        />

        <Input
          id="age"
          type="number"
          label="Wiek*"
          onChange={handleChange}
          value={values.age}
          error={errors.age}
          touched={touched.age}
        />
        <Input
          id="weight"
          type="number"
          label="Waga*"
          onChange={handleChange}
          value={values.weight}
          error={errors.weight}
          touched={touched.weight}
        />
        <Input
          id="breed"
          type="text"
          label="Rasa*"
          onChange={handleChange}
          value={values.breed}
          error={errors.breed}
          touched={touched.breed}
        ></Input>

        <Select
          id="species"
          type="select"
          value={values.species}
          onChange={handleChange}
          className={styles.species}
        >
          <option value="dog" defaultChecked>
            Pies
          </option>
          <option value="cat">Kot</option>
        </Select>

        <Select
          id="gender"
          type="select"
          value={values.gender}
          onChange={handleChange}
          className={styles.gender}
        >
          <option value="male">Samiec</option>
          <option value="female">Samica</option>
        </Select>

        <Input
          id="adoptedAt"
          type="date"
          onChange={handleChange}
          value={values.adoptedAt}
          className={styles.date}
          title="Data adopcji"
          placeholder=""
        ></Input>
        <Textarea
          id="description"
          type="text"
          label="Opis"
          onChange={handleChange}
          value={values.description}
          className={styles.description}
        />
        <Input
          id="image"
          type="file"
          onChange={handleImage}
          touched={touched.image}
          error={errors.image}
          showError={hasImage}
          className={styles.imageInput}
        />

        <button
          type="submit"
          className={`${styles.btn} ${
            role !== "admin" ? styles["btn-disabled"] : ""
          }`}
          disabled={role !== "admin"}
        >
          {isLoading && <LoadingSpinner />}
          {isLoading ? "Wysyłanie..." : "Dodaj"}
        </button>
      </form>
    </div>
  );
};

export default AddAnimal;
