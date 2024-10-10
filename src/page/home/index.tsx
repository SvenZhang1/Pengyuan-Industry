
import { Breadcrumb, Layout,theme } from 'antd';
import { useState } from 'react';
import NavLeft from '../../components/navLeft';
import MyBreadCrumb from '../../components/breadCrumb';
import MyHeader from '../../components/header';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;
function Home() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return <div className='home'>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <NavLeft/>
            </Sider>
            <Layout>
                <Header style={{ paddingRight:"20px", background: colorBgContainer,textAlign:"right" }}>
                    <MyHeader/>
                </Header>
                <Content style={{ margin: '0 16px',height:"90vh",overflowY:"auto",overflowX:"hidden" }}>
                    <MyBreadCrumb />
                    <Outlet/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    </div>
}
export default Home





