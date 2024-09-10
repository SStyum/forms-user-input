import { useState } from "react";

export const useInput = (defaultValue, validationFn) => {
    const [value, setValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(false);

    const valueIsValid = validationFn(value);

    const handleInputChange = (event) => {
        setValue(event.target.value);
        setDidEdit(false);
    };
    
    const handleInputBlur = () => {
        setDidEdit(true)
    };

      return {
        value,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid,
      };
}