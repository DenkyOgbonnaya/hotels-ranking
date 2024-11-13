import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";

// Provides a wrapper for material ui checkbox

interface Props extends CheckboxProps {}
export default function Checkbox({ ...rest }: Props) {
  return <MuiCheckbox {...rest} />;
}
