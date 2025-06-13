import { useEffect, useState } from 'react';
import api from '../services/api';
import { Button, Table, message } from 'antd';

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    api.get('/cart').then(res => setCart(res.data));
  }, []);

  const handleCheckout = () => {
    api.post('/orders', { items: cart })
      .then(() => message.success('Đặt hàng thành công'))
      .catch(() => message.error('Đặt hàng thất bại'));
  };

  const columns = [
    { title: 'Sản phẩm', dataIndex: 'product_id' },
    { title: 'Số lượng', dataIndex: 'quantity' },
  ];

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <Table dataSource={cart} columns={columns} rowKey="cart_id" />
      <Button type="primary" onClick={handleCheckout}>Đặt hàng</Button>
    </div>
  );
}