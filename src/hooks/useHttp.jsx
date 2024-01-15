import { useState, useCallback, useRef } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef();

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true), setError(null);

    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    try {
      const response = await axios[requestConfig.method](
        requestConfig.url,
        requestConfig.payload
          ? {
              ...requestConfig.payload,
              signal,
            }
          : { signal },
        requestConfig.headers ? { headers: requestConfig.headers } : ""
      );

      const data = response.data;

      applyData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  });

  return { isLoading, error, sendRequest };
};

export default useHttp;
