import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { Form, Input, Button, message, Card, Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    api.get(`/orders/${id}?_expand=items`).then(res => {
      setOrder(res.data);
      form.setFieldsValue(res.data);
    });
  }, [id, form]);

  const handleUpdate = async () => {
    try {
      const values = form.getFieldsValue();
      await api.put(`/orders/${id}`, values);
      message.success('Cập nhật đơn hàng thành công');
    } catch {
      message.error('Lỗi khi cập nhật đơn hàng');
    }
  };

  if (!order) return <div style={{ padding: 20 }}>Đang tải đơn hàng...</div>;

  return (
    <div style={{ padding: 24 }}>
      <Card bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
        <Title level={3}>Chi tiết đơn hàng #{order.order_id}</Title>
        <Form form={form} layout="vertical">
          <Form.Item label="Người đặt" name="user_id">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Ngày đặt" name="order_date">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Tổng tiền" name="total_price">
            <Input disabled />
          </Form.Item>
          <Form.Item label="Trạng thái" name="status">
            <Input />
          </Form.Item>
          <Button type="primary" block onClick={handleUpdate} style={{ marginTop: 12 }}>
            Cập nhật đơn hàng
          </Button>
        </Form>
        <Divider />
        <Title level={4}>Sản phẩm đã đặt:</Title>
        <ul>
          {(order.items || []).map((item, index) => (
            <li key={index}>
              <Paragraph>- Sản phẩm: {item.product_name || `#${item.product_id}`} | SL: {item.quantity}</Paragraph>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}