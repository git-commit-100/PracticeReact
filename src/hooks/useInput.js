import { useState } from "react";
import { useCallback } from "react/cjs/react.development";

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

  const resetInput = useCallback(() => {
    setInputValue("");
    setIsInputTouched(false);
  }, []);

  return {
    inputValue,
    isInputTouched,
    handleInputChange,
    handleInputBlur,
    isInputValid,
    resetInput,
  };
}

export default useInput;
