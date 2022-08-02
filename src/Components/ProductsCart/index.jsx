function ProductsCart({ product, currentSale, setCurrentSale, key }) {
  return (
    <li>
      <img src={product.img} alt={product.name} />
      <div className="remove-kart">
        <h1>{product.name}</h1>
      </div>
      <div className="description-kart">
        <h3>{product.category}</h3>
        <p>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </li>
  );
}
export default ProductsCart;
