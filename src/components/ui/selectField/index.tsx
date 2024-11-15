import { ComponentProps, ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface Props extends ComponentProps<"select"> {
  children: ReactNode;
  label?: string;
  isErrored?: boolean;
  errorMessage?: string;
}
const SelectField = forwardRef<HTMLSelectElement, Props>(function Input(
  { children, className, label, isErrored, errorMessage, ...rest }: Props,
  ref
) {
  return (
    <>
      <label
        htmlFor={rest.id}
        className="font-body flex flex-col text-sm flex-1 text-label mb-[4px] text-[0.9rem] leading-[1.5rem]"
      >
        {label && label}

        <select
          className={twMerge(
            "bg-input  w-full rounded-sm  py-2 px-3  text-body  border font-light  font-body text-sm focus:border-primary placeholder:text-faded leading-5  disabled:opacity-60 disabled:bg-faded disabled:bg-opacity-20 ",
            className,
            isErrored && "border-red-500"
          )}
          ref={ref}
          {...rest}
        >
          {children}
        </select>
        {errorMessage && (
          <span className="text-red-500 text-xs">{errorMessage}</span>
        )}
      </label>
    </>
  );
});

SelectField.displayName = "SelectField";
export default SelectField;
