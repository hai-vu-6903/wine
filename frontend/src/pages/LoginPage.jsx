import { useState } from 'react';
import { Input, Button, message } from 'antd';
import api from '../services/api';

export default function LoginPage() {
  const [form, setForm] = useState({ user_userName: '', user_pass: '' });

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      message.success('Đăng nhập thành công');
      // Chuyển hướng
    } catch (err) {
      message.error('Sai tài khoản hoặc mật khẩu');
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <Input placeholder="Tài khoản" onChange={e => setForm({ ...form, user_userName: e.target.value })} />
      <Input.Password placeholder="Mật khẩu" onChange={e => setForm({ ...form, user_pass: e.target.value })} />
      <Button type="primary" onClick={handleLogin}>Đăng nhập</Button>
    </div>
  );
}
