import { Item } from "./style";

function Products({ product, currentSale, setCurrentSale, id }) {
  function handleClick() {
    const findItem = currentSale.find((item) => item.id === product.id);
    if (findItem === undefined) {
      setCurrentSale([...currentSale, product]);
    }
  }
  return (
    <Item>
      <div className="item-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="item-description">
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <p>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button
          className="add-kart"
          onClick={() => {
            handleClick();
          }}
        >
          Adicionar
        </button>
      </div>
    </Item>
  );
}
export default Products;
