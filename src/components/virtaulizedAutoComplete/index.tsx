import { useMemo, Ref, useCallback } from "react";
import type { ChangeEvent } from "react";
import TextField, {
  OutlinedTextFieldProps,
  TextFieldProps,
} from "@mui/material/TextField";

import Autocomplete, {
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
  AutocompleteInputChangeReason,
  AutocompleteProps as muiProps,
} from "@mui/material/Autocomplete";
import ListBox from "../listBox";
type MuiAutocompleteProps = muiProps<any, boolean, boolean, boolean>;

export interface AutocompleteProps {
  name: string;
  label?: string;
  required?: boolean;
  inputRef?: Ref<any>;
  allowNull?: boolean;
  isLoading?: boolean;
  disable?: boolean;
  options?: any[];
  className?: string;
  value: string | number | null | any[];
  accessor?: string;
  error?: string;
  filterOptions?: MuiAutocompleteProps["filterOptions"];
  selectOnFocus?: MuiAutocompleteProps["selectOnFocus"];
  freeSolo?: MuiAutocompleteProps["freeSolo"];
  outlinedTextFieldProps?: OutlinedTextFieldProps["InputProps"];
  textFieldProps?: TextFieldProps;
  filterSelectedOptions?: MuiAutocompleteProps["filterSelectedOptions"];
  showPlaceHolderOnLoading?: boolean | null;
  noOptionsText?: MuiAutocompleteProps["noOptionsText"];
  multiple?: boolean;
  /**
   * @default "None"
   */
  nullDisplay?: string;
  ListboxComponent?: React.ComponentType<React.HTMLAttributes<HTMLElement>>;
  virtualized?: boolean;
  name_accessor?: string;
  onInputChange?:
    | ((
        event: React.ChangeEvent<Record<string, any>>,
        value: string,
        reason: AutocompleteInputChangeReason
      ) => void)
    | undefined;
  renderOption?: (data: any) => JSX.Element;
  renderTags?: MuiAutocompleteProps["renderTags"];
  onChange: (
    event: ChangeEvent<unknown>,
    value: any,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any> | undefined
  ) => void;
  id?: string;
  classes?: MuiAutocompleteProps["classes"];
}

export default function MyAutocomplete({
  inputRef,
  name,
  label,
  required,
  allowNull = true,
  nullDisplay = "",
  value = "",
  isLoading,
  disable,
  options = [],
  className,
  accessor = "id",
  error,
  showPlaceHolderOnLoading = true,
  virtualized = true,
  name_accessor = "display_name",
  multiple = false,
  outlinedTextFieldProps = {},
  textFieldProps = {},
  ...props
}: AutocompleteProps): JSX.Element {
  const memoizedOptions = useMemo(
    () =>
      allowNull && !multiple
        ? [
            {
              [accessor]: "",
              [name_accessor]: nullDisplay,
              color: "transparent",
            },
            ...options,
          ]
        : options,
    [options, nullDisplay, multiple]
  );
  const getOptionLabel = useCallback(
    (option: any) => {
      if (option === "") return nullDisplay;
      return (
        option[name_accessor] ??
        memoizedOptions.find(
          (i: { [x: string]: unknown }) => i[accessor] == option
        )?.[name_accessor] ??
        option
      );
    },
    [memoizedOptions, nullDisplay, multiple, name]
  );

  if (isLoading && showPlaceHolderOnLoading) return <p>Loading...</p>;
  if (virtualized)
    props.ListboxComponent = ListBox as React.ComponentType<
      React.HTMLAttributes<HTMLElement>
    >;

  return (
    <label className="font-body  flex flex-col text-sm flex-1 text-label mb-[4px] text-[0.9rem] leading-[1.5rem]">
      {label}
      <Autocomplete
        style={{
          width: "300px",
          height: "20px",
          padding: "1px",
        }}
        sx={{
          padding: "0px",
          width: "100%",
          fontSize: "10px",
        }}
        {...props}
        autoComplete
        multiple={multiple}
        options={memoizedOptions}
        value={multiple ? value : !allowNull ? value : value ?? ""}
        clearOnBlur
        getOptionLabel={getOptionLabel}
        loading={isLoading}
        disabled={disable}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              {...textFieldProps}
              inputRef={inputRef}
              name={name}
              // label={labelText}
              variant="outlined"
              required={required}
              InputProps={{
                ...outlinedTextFieldProps,
                ...params.InputProps,
                autoComplete: "off",
              }}
              sx={{
                fontSize: "10px",
              }}
              style={{
                fontSize: "10px",
              }}
            />
          );
        }}
      />
    </label>
  );
}
