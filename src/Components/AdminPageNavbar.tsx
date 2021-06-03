import React from "react";
import "../Styles/AdminPageNavbar.css";
import { Avatar } from "antd";
import { MessageOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";

function AdminPageNavBar() {
    return (
        <div className="header">
            <div className="item icon">
                <MenuOutlined />
            </div>
            <div className="item icon spacer">none</div>
            <div className="item icon">
                {" "}
                <BellOutlined />
            </div>
            <div className="item icon">
                {" "}
                <MessageOutlined />
            </div>
            <div className="item icon">
                <Avatar size="large" style={{ backgroundColor: "red" }}>
                    S
        </Avatar>
            </div>
        </div>
    );
}

export default AdminPageNavBar;
