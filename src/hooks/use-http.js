import { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, dataTransform) => {
    try {
      setLoading(true);
      setError(null);
      const { url, method, headers, body } = requestConfig;

      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setLoading(false);
      //data transform here
      dataTransform(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return {
    loading: loading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
