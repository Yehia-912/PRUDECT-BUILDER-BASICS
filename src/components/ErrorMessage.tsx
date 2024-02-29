interface IProps {
  message: string;
}

const ErrorMessage = ({ message }: IProps) => {
  return (
    <div className={`${!message ? "py-[8px]" : ""} duration-0`}>
      {message && (
        <span className="text-xs mt-1 ps-1 text-red-600 h-4 block font-semibold capitalize">
          {message}
        </span>
      )}
    </div>
  );
};

export default ErrorMessage;
