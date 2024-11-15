import { cva } from "class-variance-authority";

export const buttonVariant = cva(
  "flex items-center transition-all duration-300 ease-in-out px-4 gap-x-2 justify-center font-body rounded-sm font-normal text-xs focus:outline-none  focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80",
  {
    variants: {
      intent: {
        primary: "bg-primary text-onPrimary text-sm",
        danger: "bg-danger text-onPrimary text-sm",
        outline:
          "border  border-primary text-primary bg-card tracking-[0.0375rem]  hover:border-border hover:text-body",
      },
      size: {
        xs: "py-[0.1rem] px-[0.75rem] text-xs",
        sm: "text-sm py-[0.2rem] px-[0.875rem]",
        md: "text-xs lg:text-sm py-[0.30063rem]",
        lg: "text-lg py-3 font-medium font-heading",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);
