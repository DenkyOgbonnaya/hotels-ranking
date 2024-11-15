import { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"input"> {
  children: ReactNode;
}

export default function Checkbox({ children, ...rest }: Props) {
  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        className="w-4 h-4 text-primary bg-primary checked:bg-primary border-border rounded-md  focus:ring-2 "
        {...rest}
      />
      <label htmlFor={rest.id} className="ms-2 text-sm font-medium text-label">
        {children}
      </label>
    </div>
  );
}
