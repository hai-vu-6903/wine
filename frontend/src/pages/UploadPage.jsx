import { useState } from 'react';
import axios from 'axios';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function UploadPage() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/api/upload', formData)
      .then(res => message.success('Upload thành công: ' + res.data.filename))
      .catch(() => message.error('Upload thất bại'));
  };

  return (
    <div>
      <Upload beforeUpload={file => { setFile(file); return false; }} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
      </Upload>
      <Button type="primary" onClick={handleUpload} disabled={!file}>Tải lên</Button>
    </div>
  );
}