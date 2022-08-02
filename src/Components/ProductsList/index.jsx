import Products from "../Products";
import { Lista } from "./style";

function ProductsList({
  products,
  currentSale,
  setCurrentSale,
  filteredProducts,
}) {
  return (
    <Lista>
      {filteredProducts.length > 0
        ? filteredProducts.map((product, index) => (
            <Products
              key={index}
              product={product}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
              id={product.id}
            />
          ))
        : products.map((product, index) => (
            <Products
              key={index}
              product={product}
              setCurrentSale={setCurrentSale}
              currentSale={currentSale}
            />
          ))}
    </Lista>
  );
}

export default ProductsList;
