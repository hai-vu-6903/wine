import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterBar from '../components/FooterBar';
import './MainLayout.css';

const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  return (
    <Layout className="main-layout">
      <Header className="main-header">
        <Navbar />
      </Header>
      <Content className="main-content">
        <Outlet />
      </Content>
      <Footer className="main-footer">
        <FooterBar />
      </Footer>
    </Layout>
  );
}