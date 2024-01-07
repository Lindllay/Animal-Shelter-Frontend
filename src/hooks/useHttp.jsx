import { useState, useCallback } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true), setError(null);

    try {
      const response = await axios[requestConfig.method](
        requestConfig.url,
        requestConfig.payload
          ? {
              ...requestConfig.payload,
            }
          : "",
        requestConfig.headers ? { headers: requestConfig.headers } : ""
      );

      if (response.statusText !== "OK") throw new Error("Request Failed");

      const data = response.data;

      applyData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  });

  return { isLoading, error, sendRequest };
};

export default useHttp;
