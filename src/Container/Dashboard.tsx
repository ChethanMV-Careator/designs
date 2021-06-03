import  { Component } from "react";
import { Layout, Breadcrumb, Row, Card } from "antd";
import "../Styles/style.css";
import DashboardContent from "../Components/DashboardContent";
import Topnav from "../Components/Topnav";



export default class dashboard extends Component {
    render() {
        return (
            <>
                <div className="style"></div>
                <DashboardContent/>
                <Topnav/>
            </>
        );
    }
}