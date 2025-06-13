import { useEffect, useState } from "react";
import api from "../services/api";
import { Card, Row, Col } from 'antd';

function HomePage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <Row gutter={[16, 16]}>
            {products.map(product => (
                <Col key={product.product_id} span={6}>
                    <Card
                        title={product.product_name}
                        cover={<img alt="product" src={`/images/${product.product_img}`} />}
                    >
                        <p>Giá: {product.product_price}đ</p>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default HomePage;