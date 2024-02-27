import { HTMLAttributes, ReactNode } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
  width?: "w-full" | "w-fit"; //we can use type name ={ }
}

const Button = ({
  className,
  children,
  width = "w-full",

  ...rest
}: IProps) => {
  return (
    <>
      <button
        className={`${width} p-2 rounded-md ${className} uppercase `}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
