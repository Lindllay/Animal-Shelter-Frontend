import styles from "./_AddArticle.module.scss";
import articleValidationSchema from "../../../lib/formik/ArticleValidationSchema";
import { useState } from "react";
import { useFormik } from "formik";
import { Input, Textarea } from "../../../common/form";
import { uploadData } from "../../../utils/api";

import LoadingSpinner from "../../../common/UI/LoadingSpinner";

let formDataImage;

const AddArticle = () => {
  const initialValues = {
    title: "",
    date: Date.now(),
    imageSrc: "",
    imageId: "",
    introduction: "",
    description: "",
    alt: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues,
      validationSchema: articleValidationSchema,
      onSubmit: async (values) => {
        try {
          setIsLoading(true);
          await uploadData(values, formDataImage, "articles");
          handleReset();
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      },
    });

  const [isLoading, setIsLoading] = useState(false);
  const [hasImage, setHasImage] = useState(false);

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
          id="title"
          type="text"
          label="Tytuł*"
          onChange={handleChange}
          value={values.title}
          error={errors.title}
          touched={touched.title}
        />
        <Textarea
          id="introduction"
          label="Wstęp*"
          onChange={handleChange}
          value={values.introduction}
          error={errors.introduction}
          touched={touched.introduction}
        />

        <Textarea
          id="description"
          label="Opis*"
          onChange={handleChange}
          value={values.description}
          error={errors.description}
          touched={touched.description}
        />
        <div className={styles["form-row"]}>
          <Input
            id="image"
            type="file"
            onChange={handleImage}
            touched={touched.image}
            error={errors.image}
            showError={hasImage}
          />
          <Input
            id="alt"
            type="text"
            label="Opis zdjęcia*"
            onChange={handleChange}
            value={values.alt}
            error={errors.alt}
            touched={touched.alt}
          />
        </div>

        <button type="submit" className={styles.btn}>
          {isLoading && <LoadingSpinner />}
          {isLoading ? "Wysyłanie..." : "Dodaj"}
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
