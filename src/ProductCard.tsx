interface IProps {
  number: string;
}

const productCard = ({ number }: IProps) => {
  return (
    <div className="border p-2 rounded-md">
      <img
        className="rounded-md"
        alt="product name"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />
      <h3 className="fw-bold my-4 text-lg font-semibold">Nike Shoes</h3>
      <p className="text-gray-500 text-sm my-4">
        #{number} As luxury T-Shirt is just as distinctive and can be trimmed
        with premium materia...
      </p>
      <div className="flex space-x-1">
        <span className="w-5 h-5 rounded-full bg-red-500" />
        <span className="w-5 h-5 rounded-full bg-yellow-500" />
        <span className="w-5 h-5 rounded-full bg-blue-500" />
      </div>
      <div className="flex items-center justify-between my-2">
        <span className="font-bold text-indigo-500 text-lg">500$</span>
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span>Nike</span>
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="flex text-white">
        <button className="border flex-1 p-2 rounded-md bg-indigo-500 uppercase">
          edit
        </button>
        <button className=" border flex-1 p-2 rounded-md bg-red-500 uppercase">
          delete
        </button>
      </div>
    </div>
  );
};

export default productCard;
