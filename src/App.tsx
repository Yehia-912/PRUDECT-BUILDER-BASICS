import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import { PRODUCTS, defaultProductObj, formInputsList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";
import { errorsValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
const DEFAULTVALIDATABLEINPUTS = {
  title: "",
  description: "",
  imageURL: "",
  price: "",
};

const App = () => {
  // ** stats
  //#1
  const [isOpen, setIsOpen] = useState(false);
  //#2
  const [newProduct, setNewProduct] = useState<IProduct>(defaultProductObj);
  //#3
  const [errorMessages, setErrorMessages] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);

  // ** handelers
  //#1

  //#1

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });

    setErrorMessages((prev) => {
      return { ...prev, [name]: "" };
    });
  };
  //#2
  const oncloseHandler = () => setIsOpen(false);
  //#3
  const onCancelHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNewProduct(defaultProductObj);
    oncloseHandler();
    setErrorMessages(DEFAULTVALIDATABLEINPUTS);
  };
  //#
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, imageURL, price } = newProduct;
    const errors = errorsValidation({
      title,
      description,
      imageURL,
      price,
    });
    const hasError = Object.values(errors).some((error) => error);
    if (hasError) {
      setErrorMessages(errors);
      return;
    } else {
      setErrorMessages(DEFAULTVALIDATABLEINPUTS);
    }

    console.log("ok");
  };
  // ** renders
  //#1
  const renderProductsList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  //#2r

  // const hasError = Object.values(errors).some((error) => error);
  const renderFormInputs = formInputsList.map(({ id, label, name, type }) => (
    <div className="flex flex-col" key={name}>
      <label htmlFor={id} className="text-sm mb-[1px]">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        type={type}
        value={newProduct[name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage message={errorMessages[name]} />
    </div>
  ));

  return (
    <main className="container">
      <Button className="w-fit bg-red-700" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <div className="m-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4  md:gap-5">
        {renderProductsList}
      </div>

      <Model
        closeModal={oncloseHandler}
        isOpen={isOpen}
        title="add new pruduct"
      >
        <form action="get" onSubmit={onSubmitHandler}>
          {renderFormInputs}

          <br />
          <div className="flex space-x-3">
            <Button
              className="w-full bg-indigo-400  text-white hover:bg-indigo-500 duration-150"
              // onClick={oncloseHandler}
            >
              submit
            </Button>
            <Button
              className="w-full bg-gray-400 text-white hover:bg-gray-500 duration-150"
              onClick={(e) => onCancelHandler(e)}
            >
              cancel
            </Button>
          </div>
        </form>
      </Model>
    </main>
  ); //array by usual use join method by default
};

export default App;
