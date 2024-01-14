import axios from "axios";
import { url } from "./config";

// Animal routes

// /api/v1/animals/uploadImage POST (uploadImage)
// /api/v1/animals/ GET(getAllAnimals), POST(createAnimal)
// /api/v1/animals/find/:name GET(getAnimalsByName)
// /api/v1/animals/:id GET(getAnimal), DELETE(deleteAnimal)

// ArticleRoutes

// /api/v1/articles/ GET(getAllArticles), POST(createArticle)
// /api/v1/articles/:id GET(getArticle), DELETE(deleteArticle)

// AuthRoutes

// /api/v1/login/ POST(login)
// /api/v1/logout/ POST(logout)
// /api/v1/dashboard GET(dashboard)

// UploadImage

// /api/v1/upload POST(uploadImage)

// const onSubmit = async (values, route) => {
//   try {
//     setIsLoading(true);
//     const { data } = await axios.post(`${url}api/v1/upload`, formDataImage, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     await axios.post(
//       `${url}api/v1/articles`,
//       {
//         data: {
//           ...values,
//           imageSrc: data.image.src,
//           imageSrcSmall: data.image.srcSmall,
//           imageId: data.image.public_id,
//         },
//       },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     handleReset();
//     setIsLoading(false);
//   } catch (error) {
//     console.error(error);
//   }
// };

const token = localStorage.getItem("token");

export const uploadData = async (values, formDataImage, route) => {
  try {
    const { data } = await axios.post(`${url}api/v1/upload`, formDataImage, {
      headers: { Authorization: `Bearer ${token}` },
    });

    await axios.post(
      `${url}api/v1/${route}`,
      {
        data: {
          ...values,
          imageSrc: data.image.src,
          imageSrcSmall: data.image.srcSmall,
          imageId: data.image.public_id,
        },
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    console.error(error.message);
  }
};
