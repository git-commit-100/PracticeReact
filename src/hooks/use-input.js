import { useState } from "react";

function useInput(validateValue) {
  const [inputValue, setInputValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isInputInvalid = validateValue(inputValue);
  const hasError = !isInputInvalid && wasInputTouched;

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleInputBlur() {
    setWasInputTouched(true);
  }

  function resetInput() {
    setInputValue("");
    setWasInputTouched(false);
  }

  return {
    value: inputValue,
    isValid: isInputInvalid,
    wasTouched: wasInputTouched,
    hasError,
    handleInputChange,
    handleInputBlur,
    resetInput,
  };
}

export default useInput;
