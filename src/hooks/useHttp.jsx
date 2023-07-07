import { useState } from "react";
import axios from "axios";

const url = "http://127.0.0.1:5173/";

const useHttp = (requestConfig, applyData) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = async (applyData) => {
		setIsLoading(true), setError(null);

		try {
			const response = await axios.get(requestConfig.url, {
				filters: requestConfig.filters,
			});
			console.log(response);
		} catch (error) {}
	};

	return { isLoading, error, sendRequest };
};

export default useHttp;
