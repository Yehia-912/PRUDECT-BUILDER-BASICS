import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import { PRODUCTS, formInputsList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ** renders
  const renderProductsList = PRODUCTS.map((product) => (
    <ProductCard key={product.id} product={product} /> //#1
  ));
  const renderFormInput = formInputsList.map(({ id, label, name, type }) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm mb-[1px]">
        {label}
      </label>
      <Input id={id} name={name} type={type} />
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
      <div>
        <Model isOpen={isOpen} setIsOpen={setIsOpen} title="add new pruduct ">
          <form action="post" className="flex flex-col space-y-3">
            {renderFormInput}
          </form>
        </Model>
      </div>
    </main>
  ); //array by usual use join method by default
};

export default App;
