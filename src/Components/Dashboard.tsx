import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import { Footer } from "antd/lib/layout/layout";
import "../App.css";

const { Content } = Layout;

export default class dashboard extends Component {
    render() {
        return (
            <>
                <div className="style"></div>
                <Row>
                    <Layout>
                        <Content style={{ background: "#f0f0f0", padding: "0 30px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>
                                    <a href="#">Dashboard</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Candidates</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="background">
                                <div className="ant-row">
                                    <div className="ant-col ant-col-6">
                                        <Card
                                            className="card"
                                            style={{ background: "#e6f7ff" }}
                                            hoverable
                                        >
                                            <h1 className="bigNumbers">10</h1>
                                            <h4>Recruiters</h4>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            className="card"
                                            style={{ background: "#f4ffb8" }}
                                            hoverable
                                        >
                                            <h1 className="bigNumbers">4</h1>

                                            <h4>HR</h4>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            className="card"
                                            style={{ background: "#ffccc7" }}
                                            hoverable
                                        >
                                            <h1 className="bigNumbers">03</h1>

                                            <h4>Leader</h4>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            className="card"
                                            style={{ background: "#d9d9d9" }}
                                            hoverable
                                        >
                                            <h1 className="bigNumbers">04</h1>

                                            <h4>Account Manager</h4>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </Content>
                        <Footer style={{ background: "#f0f0f0", padding: 15 }}></Footer>
                    </Layout>
                </Row>
            </>
        );
    }
}