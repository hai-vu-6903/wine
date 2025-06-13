import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.product_name}</h2>
      <img src={`/images/${product.product_img}`} width={200} />
      <p>{product.product_description}</p>
      <p>Giá: {product.product_price}đ</p>
    </div>
  );
}
