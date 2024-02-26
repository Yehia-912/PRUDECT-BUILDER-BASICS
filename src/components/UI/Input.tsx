import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="border rounded-lg px-2 py-3 shadow-md text-sm border-gray-300  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 caret-gray-600 "
    />
  );
};

export default Input;
