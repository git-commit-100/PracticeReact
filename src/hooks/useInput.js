import { useState } from "react";

function useInput(validateInput) {
  const [inputValue, setInputValue] = useState("");
  const [wasTouched, setWasTouched] = useState(false);

  const isInputInvalid = validateInput(inputValue);
  const hasError = !isInputInvalid && wasTouched;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    setWasTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setWasTouched(false);
  };

  return {
    value: inputValue,
    isValid: isInputInvalid,
    hasError,
    handleInputChange,
    handleInputBlur,
    resetInput,
  };
}

export default useInput;
