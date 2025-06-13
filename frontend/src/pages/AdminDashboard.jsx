import { useEffect, useState } from 'react';
import api from '../services/api';
import {
  Table, Button, Popconfirm, message, Modal, Form, Input, Tag, Card, Statistic, Select
} from 'antd';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [statusFilter, setStatusFilter] = useState(null);

  const fetchData = () => {
    api.get('/products').then(res => setProducts(res.data));
    api.get('/orders?_expand=items').then(res => setOrders(res.data));
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/products/${id}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      });
      message.success('Đã xóa sản phẩm');
      fetchData();
    } catch {
      message.error('Lỗi khi xóa');
    }
  };

  const handleEdit = (record) => {
    setEditingProduct(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    const values = form.getFieldsValue();
    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct.product_id}`, values, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        });
        message.success('Cập nhật thành công');
      } else {
        await api.post('/products', values, {
          headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        });
        message.success('Thêm mới thành công');
      }
      setIsModalOpen(false);
      fetchData();
    } catch {
      message.error('Lỗi khi lưu dữ liệu');
    }
  };

  const handleConfirmOrder = async (id) => {
    try {
      await api.put(`/orders/${id}`, { status: 'Đã xác nhận' });
      message.success('Đã xác nhận đơn hàng');
      fetchData();
    } catch {
      message.error('Lỗi khi xác nhận');
    }
  };

  const handleCancelOrder = async (id) => {
    try {
      await api.put(`/orders/${id}`, { status: 'Đã hủy' });
      message.success('Đã hủy đơn hàng');
      fetchData();
    } catch {
      message.error('Lỗi khi hủy');
    }
  };

  const productColumns = [
    { title: 'ID', dataIndex: 'product_id' },
    { title: 'Tên', dataIndex: 'product_name' },
    { title: 'Giá', dataIndex: 'product_price' },
    {
      title: 'Hành động',
      render: (_, record) => (
        <>
          <Button onClick={() => handleEdit(record)}>Sửa</Button>
          <Popconfirm title="Xác nhận xóa?" onConfirm={() => handleDelete(record.product_id)}>
            <Button danger style={{ marginLeft: 8 }}>Xóa</Button>
          </Popconfirm>
        </>
      )
    }
  ];

  const orderColumns = [
    {
      title: 'ID đơn',
      dataIndex: 'order_id',
      render: (id) => <a href={`/order/${id}`}>#{id}</a>
    },
    { title: 'Người đặt', dataIndex: 'user_id' },
    { title: 'Ngày đặt', dataIndex: 'order_date' },
    { title: 'Tổng tiền', dataIndex: 'total_price' },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      render: (status) => <Tag color={status === 'Đã xác nhận' ? 'green' : status === 'Đã hủy' ? 'red' : 'orange'}>{status || 'Chờ xử lý'}</Tag>
    },
    {
      title: 'Hành động',
      render: (_, record) => (
        <div style={{ display: 'flex', gap: 8 }}>
          <Button type="primary" onClick={() => handleConfirmOrder(record.order_id)}>
            Xác nhận
          </Button>
          <Button danger onClick={() => handleCancelOrder(record.order_id)}>
            Huỷ
          </Button>
        </div>
      )
    }
  ];

  const filteredOrders = statusFilter ? orders.filter(o => o.status === statusFilter) : orders;
  const totalRevenue = orders.filter(o => o.status === 'Đã xác nhận').reduce((sum, o) => sum + (o.total_price || 0), 0);

  return (
    <div>
      <h2>Thống kê</h2>
      <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
        <Card><Statistic title="Tổng đơn hàng" value={orders.length} /></Card>
        <Card><Statistic title="Đơn đã xác nhận" value={orders.filter(o => o.status === 'Đã xác nhận').length} /></Card>
        <Card><Statistic title="Doanh thu (VNĐ)" value={totalRevenue} /></Card>
      </div>

      <h2>Quản lý sản phẩm</h2>
      <Button type="primary" onClick={handleAddNew} style={{ marginBottom: 16 }}>+ Thêm sản phẩm</Button>
      <Table dataSource={products} columns={productColumns} rowKey="product_id" pagination={{ pageSize: 5 }} />

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSubmit}
        title={editingProduct ? 'Cập nhật sản phẩm' : 'Thêm sản phẩm mới'}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name="product_name" label="Tên sản phẩm" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="product_price" label="Giá" rules={[{ required: true }]}> <Input /> </Form.Item>
          <Form.Item name="product_img" label="Hình ảnh"> <Input /> </Form.Item>
          <Form.Item name="product_description" label="Mô tả"> <Input.TextArea rows={4} /> </Form.Item>
        </Form>
      </Modal>

      <h2 style={{ marginTop: 48 }}>Quản lý đơn hàng</h2>
      <div style={{ marginBottom: 12 }}>
        <Select
          placeholder="Lọc theo trạng thái"
          allowClear
          style={{ width: 200 }}
          onChange={value => setStatusFilter(value)}
          options={[
            { label: 'Chờ xử lý', value: null },
            { label: 'Đã xác nhận', value: 'Đã xác nhận' },
            { label: 'Đã hủy', value: 'Đã hủy' }
          ]}
        />
      </div>
      <Table
        dataSource={filteredOrders}
        columns={orderColumns}
        rowKey="order_id"
        expandable={{
          expandedRowRender: (record) => (
            <ul>
              {(record.items || []).map((item, index) => (
                <li key={index}>Sản phẩm #{item.product_id} - SL: {item.quantity}</li>
              ))}
            </ul>
          )
        }}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
