import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { buttonVariant } from "./button.variant";

interface AdditionalProps {
  className?: string; // Allow additional class names to be passed
}

export interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariant>,
    AdditionalProps {
  children: string | React.JSX.Element;
  isLoading?: boolean;
}

export default function Button({
  intent,
  fullWidth,
  children,
  isLoading,
  className,
  ...props
}: Props) {
  return (
    <button
      className={`${buttonVariant({ intent, fullWidth })} ${className}`}
      disabled={isLoading}
      aria-disabled={isLoading}
      {...props}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}
