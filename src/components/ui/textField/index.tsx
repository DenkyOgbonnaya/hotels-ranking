import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
interface Props extends ComponentProps<"input"> {
  label: string;
  isErrored?: boolean;
  errorMessage?: string;
}
const TextInput = forwardRef<HTMLInputElement, Props>(function Input(
  { name, className, label, isErrored, errorMessage, ...rest }: Props,
  ref
) {
  return (
    <>
      <label
        htmlFor={rest.id}
        className="font-body flex flex-col text-sm flex-1 text-label mb-[4px] text-[0.9rem] leading-[1.5rem]"
      >
        {label && label}
        <input
          name={name}
          className={twMerge(
            "bg-input   w-full rounded-sm  py-[1rem] px-3  text-body  border font-light  font-body text-sm focus:outline-primary placeholder:text-faded leading-5  disabled:opacity-60 disabled:bg-faded disabled:bg-opacity-20 ",
            className,
            isErrored && "border-red-500"
          )}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <span className="text-red-500 text-xs">{errorMessage}</span>
        )}
      </label>
    </>
  );
});

TextInput.displayName = "TextInput";
export default TextInput;
