import { Layout } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { Navbar } from "../Navbar";
import { PageFooter } from "../PageFooter";

interface HomeLayoutProps {}

export const HomeLayout: React.FC<HomeLayoutProps> = ({children}) => {
  return (
    <Layout className="site-layout">
      <Header
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        className="site-layout-background"
      >
        <Navbar user="user" />
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center", background: "#0e0f11" }}>
        <PageFooter />
      </Footer>
    </Layout>
  );
};
