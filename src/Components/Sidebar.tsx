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
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sidebar">

                    <Menu mode="inline" defaultSelectedKeys={['1']} className="menu">
                        <Menu.Item key="1" >
                            <img src="../../Images/Logo.png" alt="" className="img" />
                        </Menu.Item>
                        <Menu.Item key="2" icon={< DashboardOutlined />}>
                            Dashboard
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UserOutlined />}>
                            Users
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="nabar">
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