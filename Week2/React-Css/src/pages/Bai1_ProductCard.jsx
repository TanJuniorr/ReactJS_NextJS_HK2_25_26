import ProductCard from "../components/ProductCard/ProductCard"
import aoImg from "../assets/ao.jpg"

function Bai1_ProductCard() {
  return (
    <ProductCard
      image={aoImg}
      name="Áo thun thể thao"
      price={199000}
    />
  )
}

export default Bai1_ProductCard