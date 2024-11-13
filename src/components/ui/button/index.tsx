import { Button as MuiButton, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

// Provides a wrapper for material ui buttons

interface Props extends ButtonProps {
  children: ReactNode;
}
export default function Button({ children, ...rest }: Props) {
  return <MuiButton {...rest}>{children}</MuiButton>;
}
