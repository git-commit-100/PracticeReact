import { useState } from "react";

function useInput(validateValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [wasInputTouched, setWasInputTouched] = useState(false);

  const isInputInvalid = validateValue(enteredValue);
  const hasError = !isInputInvalid && wasInputTouched;

  function handleInputChange(e) {
    setEnteredValue(e.target.value);
  }

  function handleInputBlur() {
    if (!isInputInvalid) {
      setWasInputTouched(true);
    }
  }

  function resetInput() {
    setEnteredValue("");
    setWasInputTouched("");
  }

  return {
    value: enteredValue,
    isValid: isInputInvalid,
    hasError,
    handleInputChange,
    handleInputBlur,
    resetInput,
  };
}

export default useInput;
