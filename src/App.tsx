import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Model from "./components/UI/Model";
import { PRODUCTS } from "./data";
import Button from "./components/UI/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ** renders
  const productsList = PRODUCTS.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Button className="w-fit bg-red-700" onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <div className="m-5 grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4  md:gap-5">
        {productsList}
      </div>
      <div>
        <Model isOpen={isOpen} setIsOpen={setIsOpen} title="add new pruduct " />
      </div>
    </main>
  ); //array by usual use join method by default
};

export default App;
