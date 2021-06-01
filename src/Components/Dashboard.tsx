import React, { Component } from "react";
import { Layout, Breadcrumb, Row, Col, Card } from "antd";
import Column from "antd/lib/table/Column";
import { Footer } from "antd/lib/layout/layout";

const { Content } = Layout;
const { Meta } = Card;

export default class dashboard extends Component {
    render() {
        return (
            <>
                <Row>
                    <Layout>
                        <Content style={{ background: "#f0f0f0", padding: "0 30px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>
                                    <a href="#">Dashboard</a>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>Candidates</Breadcrumb.Item>
                            </Breadcrumb>
                            <div
                                style={{
                                    background: "#FFFFFF",
                                    padding: 24,
                                    minHeight: 580,
                                }}
                            >
                                <div className="ant-row">
                                    <div className="ant-col ant-col-6">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 150,
                                                height: 150,
                                                background: "#e6f7ff",
                                                top: 50,
                                                left: 40,
                                            }}
                                        >
                                            <div>
                                                <h1>10</h1>
                                            </div>
                                            <div>Recruiters</div>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 150,
                                                height: 150,
                                                background: "#f4ffb8",
                                                top: 50,
                                                left: 40,
                                            }}
                                        >
                                            <div>
                                                <h1>4</h1>
                                            </div>
                                            <div>HR</div>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 150,
                                                height: 150,
                                                background: "#ffccc7",
                                                top: 50,
                                                left: 40,
                                            }}
                                        >
                                            <div>
                                                <h1>03</h1>
                                            </div>
                                            <div>Leader</div>
                                        </Card>
                                    </div>

                                    <div className="ant-col ant-col-6">
                                        <Card
                                            hoverable
                                            style={{
                                                width: 150,
                                                height: 150,
                                                background: "#d9d9d9",
                                                top: 50,
                                                left: 40,
                                            }}
                                        >
                                            <div>
                                                <h1>04</h1>
                                            </div>
                                            <div>Account Manager</div>
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