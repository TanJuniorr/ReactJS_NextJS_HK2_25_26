import "./ProductCard.css"

function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}đ</p>
      <button className="product-btn">Add to cart</button>
    </div>
  )
}

export default ProductCard