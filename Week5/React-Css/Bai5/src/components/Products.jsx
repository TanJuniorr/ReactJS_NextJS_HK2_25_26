import { Link } from 'react-router-dom';

export default function Products() {
  const products = [
    { id: 1, name: 'Iphone' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Laptop' }
  ];

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        {products.map(item => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}