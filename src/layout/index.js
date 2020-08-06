import React from "react";
import { Layout } from "antd";
import Sider from "./sider";
import "./MainLayout.scss";

const { Content } = Layout;

const MainLayout = ({ children }) => {
    return (
        <Layout>
            <Sider />
            <Layout
                style={{
                    minHeight: "100vh"
                }}
            >
               <Content style={{
                    padding: 2, background: 'fbfbfb', minHeight: '100vh',
                }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;