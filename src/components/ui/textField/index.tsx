import { TextField as MuiTextfield, TextFieldProps } from "@mui/material";

// Provides a wrapper for material ui textfield

type Props = {} & TextFieldProps;

export default function TextField({ ...rest }: Props) {
  return <MuiTextfield {...rest} />;
}
