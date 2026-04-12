import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>Product ID: {id}</p>

      <button 
        onClick={() => navigate('/checkout')}
      >
        Mua hàng
      </button>
    </div>
  );
}