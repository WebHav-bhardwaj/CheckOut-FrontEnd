import React, { useEffect, useReducer } from "react";

import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { validate } from "../../../shared/components/util/validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isTouched: false,
    isValid: props.initialValid || false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const onBlurHandler = (event) => {
    dispatch({ type: "TOUCH" });
  };

  const element =
    props.element === "input" ? (
      <TextField
        error={inputState.isTouched && !inputState.isValid}
        onBlur={onBlurHandler}
        onChange={changeHandler}
        id={props.id}
        label={props.label}
        helperText={
          inputState.isTouched && !inputState.isValid
            ? props.errorText
            : props.placeholder
        }
        type={props.type}
        value={inputState.value}
      />
    ) : (
      <TextField
        error={inputState.isTouched && !inputState.isValid}
        onBlur={onBlurHandler}
        onChange={changeHandler}
        helperText={
          inputState.isTouched && !inputState.isValid
            ? props.errorText
            : props.placeholder
        }
        id={props.id}
        label={props.label}
        multiline
        rows={4}
        value={inputState.value}
      />
    );
  return (
    <div className={`${props.className} py-3 w-full lg:w-2/3`}>
      <FormControl fullWidth>{element}</FormControl>
    </div>
  );
};

export default Input;
