import ProductCard from "./components/ProductCard";
import { PRODUCTS } from "./data";

const App = () => {
  // ** renders
  const productsList = PRODUCTS.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <div className="m-5 grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4  md:gap-5">
        {productsList}
      </div>
    </main>
  ); //array by usual use join method by default
};

export default App;
