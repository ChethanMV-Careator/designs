import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    UserOutlined
} from '@ant-design/icons';
import React from 'react';
import Dashboard from './Dashboard';

const { Header, Sider, } = Layout;

class Sidebar extends React.Component {
    state = {
        collapsed: false,
        isOpen: false

    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            isOpen: !this.state.isOpen

        });
    };

    
    render() {    
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">
                    {/* <img src="../../Images/Logo.svg" alt="" className="img" /> */}

                    <Menu mode="inline" defaultSelectedKeys={['1']} className="menu">
                        <Menu.Item>
                            <img src="../../Images/Logo.svg" alt="" className="img"/>
                        </Menu.Item>
                        <Menu.Item key="1" icon={< DashboardOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            Users
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="navbar">
                    <Header className="toggle">
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}

                    </Header>
                    <Dashboard />
                </Layout>
            </Layout>
        );
    }
}

export default Sidebar;