import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className="block cursor-pointer h-5 w-5 rounded-full flex-wrap bg-indigo-500"
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColor;
