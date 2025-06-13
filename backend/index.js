const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//routers
app.use('/api/products', require('./routes/productRouter'));
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/upload', require('./routes/uploadRoute'));
app.use('/api/cart', require('./routes/cartRoute'));
app.use('/api/comments', require('./routes/commentRoute'));
app.use('/api/orders', require('./routes/orderRoute'));
app.use('/api/catalogs', require('./routes/catalogRoute'));
app.use('/api/users', require('./routes/userRoute'));

// Test
// app.get('/', (req, res) => {
//     res.send('API đang hoạt động!');
// });

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

