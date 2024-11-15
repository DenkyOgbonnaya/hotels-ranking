import { Search } from "@mui/icons-material";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"input"> {}
const SearchField = forwardRef<HTMLInputElement, Props>(function SearchField(
  { className, ...props }: Props,
  ref
) {
  return (
    <div className="relative w-full">
      <Search className="absolute top-2 left-2 text-faded" />
      <input
        className={twMerge(
          "bg-input  w-full rounded-xs   py-2 px-3 pl-8  text-body  border font-light  font-body text-sm focus:ring-primary-500 placeholder:text-faded leading-5  disabled:opacity-60 disabled:bg-faded disabled:bg-opacity-20 ",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});

SearchField.displayName = "SearchField";
export default SearchField;
