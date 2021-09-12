import React, { InputHTMLAttributes } from "react";
import { useField, Field } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { options } from "../../utils/sample-data";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  placeholder?: string;
  label?: string;
  textarea?: boolean;
  select?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  textarea,
  size: _,
  select,
  ...props
}) => {
  const [field, { error }] = useField(props);

  let InputOrTextarea: any = Input;
  if (textarea) {
    InputOrTextarea = Textarea;
  }

  if (select) {
    return (
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Field as={Select} name={field.name} {...field}>
          <option value=""></option>
          {options
            ? options.map((a) => (
                <option key={a.id} value={a.name.toLocaleLowerCase()}>
                  {a.name}
                </option>
              ))
            : null}
        </Field>
        {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
  }
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea {...field} {...props} />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
