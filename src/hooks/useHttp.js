import { useReducer, useCallback } from "react";

const URL = "https://react-https-61e56-default-rtdb.firebaseio.com";

const httpInitialState = {
  error: null,
  data: null,
  status: null,
};

const httpReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      error: null,
      data: null,
      status: "pending",
    };
  }

  if (action.type === "ERROR") {
    return {
      error: action.errorMessage,
      data: null,
      status: "completed",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      error: null,
      data: action.response,
      status: "completed",
    };
  }

  return state;
};

function useHttp() {
  const [httpState, dispatch] = useReducer(httpReducer, httpInitialState);

  const sendHttpRequest = useCallback(async (requestConfig) => {
    try {
      const { path, method, body, headers } = requestConfig;
      //path => quotes.json
      dispatch({ type: "SEND" });

      const response = await fetch(`${URL}/${path}`, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      dispatch({ type: "SUCCESS", response: data });
    } catch (error) {
      dispatch({ type: "ERROR", errorMessage: error.message });
    }
  }, []);

  return {
    sendHttpRequest,
    status: httpState.status,
    error: httpState.error,
    data: httpState.data,
  };
}

export default useHttp;
