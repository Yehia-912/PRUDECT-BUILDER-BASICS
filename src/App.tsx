import { ChangeEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import { PRODUCTS, defaultProductObj, formInputsList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import { IProduct } from "./interfaces";

const App = () => {
  // ** stats
  //#1
  const [isOpen, setIsOpen] = useState(false);
  //#2
  const [newProduct, setNewProduct] = useState<IProduct>(defaultProductObj);
  //#3
  const [products, setProducts] = useState<IProduct[]>(PRODUCTS);

  // ** handelers
  //#1
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };
  // ** renders
  //#1
  const renderProductsList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  //#2
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
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="add new pruduct"
        setProducts={setProducts}
        products={products}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      >
        {renderFormInputs}
      </Model>
    </main>
  ); //array by usual use join method by default
};

export default App;
