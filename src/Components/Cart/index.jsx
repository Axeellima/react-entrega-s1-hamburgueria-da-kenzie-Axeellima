import ProductsCart from "../ProductsCart";
import { CartDiv } from "./style";

function Cart({ currentSale, setCurrentSale }) {
  const totalPrice = currentSale.reduce((previous, current) => {
    return previous + current.price;
  }, 0);
  return (
    <CartDiv>
      <h1 className="title-kart">Carrinho de Compras</h1>
      {currentSale.length < 1 ? (
        <>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </>
      ) : (
        <>
          <ul>
            {currentSale.map((product, index) => (
              <ProductsCart
                product={product}
                key={index}
                currentSale={currentSale}
                setCurrentSale={setCurrentSale}
              />
            ))}
          </ul>
          <div className="total-price">
            <p>Total:</p>
            <p>
              {totalPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentSale([]);
            }}
            className="remove-all"
          >
            Remover todos
          </button>
        </>
      )}
    </CartDiv>
  );
}

export default Cart;
