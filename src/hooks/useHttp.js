import { useReducer } from "react";

const initialRequestState = {
  data: "",
  status: "",
  error: "",
};

const httpRequestReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: "",
      status: "pending",
      error: "",
    };
  }

  if (action.type === "ERROR") {
    return {
      error: action.error,
      data: "",
      status: "completed",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.response,
      status: "completed",
      error: "",
    };
  }

  return state;
};

function useHttp() {
  const [requestState, dispatchRequestState] = useReducer(
    httpRequestReducer,
    initialRequestState
  );

  const sendRequest = async (requestConfig) => {
    const { url, method, headers, body } = requestConfig;
    try {
      dispatchRequestState({ type: "SEND" });

      const response = await fetch(url, {
        method: method ? method : "GET",
        headers: headers ? headers : {},
        body: body ? JSON.stringify(body) : null,
      });

      const data = await response.json();

      dispatchRequestState({ type: "SUCCESS", response: data });
    } catch (error) {
      dispatchRequestState({ type: "ERROR", error: error.message });
    }
  };

  return {
    data: requestState.data,
    status: requestState.status,
    error: requestState.error,
    sendRequest,
  };
}

export default useHttp;
