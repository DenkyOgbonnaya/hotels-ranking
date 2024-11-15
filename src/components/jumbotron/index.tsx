import { ComponentProps } from "react";

interface Props extends ComponentProps<"p"> {
  message: string;
}
export default function Jumbotron({ message, ...rest }: Props) {
  return (
    <div className="flex justify-center items-center">
      <p className="text-sm font-body text-text" {...rest}>
        {message}
      </p>
    </div>
  );
}
