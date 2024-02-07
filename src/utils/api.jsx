import axios from "axios";
import { url } from "./config";

export const uploadData = async (values, formDataImage, route) => {
  const token = localStorage.getItem("token");

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
