import { useState } from "react";

function useInput(validateValue) {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const isInputValid = validateValue(inputValue);

  // const invalidInput = isInputTouched && !isInputValid;

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleInputBlur(e) {
    setIsInputTouched(true);
  }

  function resetInput() {
    setInputValue("");
    setIsInputTouched(false);
  }

  return {
    inputValue,
    isInputValid,
    isInputTouched,
    // invalidInput,
    handleInputChange,
    handleInputBlur,
    resetInput,
  };
}

export default useInput;
