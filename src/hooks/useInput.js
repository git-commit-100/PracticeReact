import { useState } from "react";

function useInput(validateValue) {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  let isInputValid = validateValue(inputValue);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleInputBlur(e) {
    setIsInputTouched(true);
  }

  return {
    inputValue,
    isInputTouched,
    handleInputChange,
    handleInputBlur,
    isInputValid,
  };
}

export default useInput;
