import { PRODUCT } from "../interfaces";
import { stringSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {
  product: PRODUCT;
}

const productCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="border p-2 rounded-md max-w-sm md:max-w-lg mx-auto  ">
      <Image
        alt="product card"
        imageURL={imageURL}
        classes="rounded-md min-h-[190.54px] md:object-cover "
      />

      <h3 className="fw-bold my-4 text-lg font-semibold">
        {stringSlicer(title, 25)}
      </h3>
      <p className="text-gray-500 text-sm my-4 min-h-[80px]">
        {stringSlicer(description, 150)}
      </p>
      <div className="flex space-x-1">
        <span className="w-5 h-5 rounded-full bg-red-500" />
        <span className="w-5 h-5 rounded-full bg-yellow-500" />
        <span className="w-5 h-5 rounded-full bg-blue-500" />
      </div>
      <div className="flex items-center justify-between my-2">
        <span className="font-bold text-indigo-500 text-lg">${price}</span>
        <div className="flex items-center space-x-2 text-sm font-semibold">
          <span>{category.name}</span>
          <Image
            imageURL={category.imageURL}
            alt="small preview"
            classes="w-12 h-12 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex text-white space-x-1">
        <Button className="bg-indigo-700" width="w-full">
          edit
        </Button>
        <Button className="bg-red-700" width="w-full">
          delete
        </Button>
      </div>
    </div>
  );
};

export default productCard;
