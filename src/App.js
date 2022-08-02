import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import ProductsList from "./Components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [valueInput, setValueInput] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  const showProducts = () => {
    return setFilteredProducts(
      products.filter((item) => {
        const searchA = item.category
          .toLowerCase()
          .includes(valueInput.trim().toLowerCase());
        const searchB = item.name
          .toLowerCase()
          .includes(valueInput.trim().toLowerCase());

        return searchA || searchB;
      })
    );
  };

  return (
    <div className="App">
      <header>
        <div>
          <h1>
            Burguer<strong> Kenzie</strong>
          </h1>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Encontre seu produto"
            value={valueInput}
            onChange={(event) => setValueInput(event.target.value)}
          />
          <button
            onClick={() => {
              showProducts();
            }}
          >
            Pesquisar
          </button>
        </div>
      </header>
      <main>
        <ProductsList
          products={products}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          filteredProducts={filteredProducts}
        />
        <section>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </main>
    </div>
  );
}

export default App;
