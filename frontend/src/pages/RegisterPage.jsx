import { useState } from 'react';
import { Input, Button, message } from 'antd';
import api from '../services/api';

export default function RegisterPage() {
  const [form, setForm] = useState({
    user_userName: '',
    user_pass: '',
    user_email: '',
    user_name: ''
  });

  const handleRegister = async () => {
    try {
      await api.post('/auth/register', form);
      message.success('Đăng ký thành công');
    } catch (err) {
      message.error('Đăng ký thất bại');
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <Input placeholder="Tài khoản" onChange={e => setForm({ ...form, user_userName: e.target.value })} />
      <Input.Password placeholder="Mật khẩu" onChange={e => setForm({ ...form, user_pass: e.target.value })} />
      <Input placeholder="Email" onChange={e => setForm({ ...form, user_email: e.target.value })} />
      <Input placeholder="Tên người dùng" onChange={e => setForm({ ...form, user_name: e.target.value })} />
      <Button type="primary" onClick={handleRegister}>Đăng ký</Button>
    </div>
  );
}