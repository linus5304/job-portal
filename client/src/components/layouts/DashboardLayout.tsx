import { Layout, Menu } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSuitcase, FaUserAlt, FaKeycdn } from "react-icons/fa";
import { RiDashboardLine, RiSettings3Fill } from "react-icons/ri";
import { Navbar } from '../Navbar';

const { Header, Content, Sider } = Layout;

interface DashboardLayoutProps {}



export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  let state = "";

  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  useEffect(() => {
    const newState = window.localStorage.getItem("selected-key");
    state = JSON.parse(newState);
    setSelectedKey(state);

    console.log("hello", state);
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("selected-key", JSON.stringify(state));
  // }, []);

  const handleSelect = (e) => {
    state = e.key;
    setSelectedKey(state);
    window.localStorage.setItem("selected-key", JSON.stringify(state));
  };
  const toggle = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ position: "fixed", height: "100vh" }}
          theme="light"
        >
          <div className="logo" >
          <Link href="/">
          <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer'}}>
            
            <FaKeycdn style={{fontSize: 35, fontWeight:'bold'}}/>
            <div style={{fontSize: 20, fontWeight:'bold'}}>goJobs</div>
            
          </div>
          </Link>
          </div>
          <Menu
            theme="light"
            mode="inline"
            onClick={handleSelect}
            selectedKeys={[selectedKey]}
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1" icon={<RiDashboardLine />} >
              <Link href="/admin">Dashboard </Link>{" "}
            </Menu.Item>
            <Menu.Item key="2" icon={<FaSuitcase />} >
              <Link href="/admin/posted-jobs">Posted Jobs</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FaUserAlt />}>
              <Link href="/admin/applicants">Applicants</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<RiSettings3Fill />}>
              <Link href="/admin/settings">settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-background"
            style={{ position: "fixed", zIndex: 1, width: "90%" }}
          >
           <Navbar user='admin'/> 
          </Header>
          <div className="bg-gray">
            <Content
              className="container-fluid"
              style={{ marginTop: "7%", minHeight: "100vh" }}
            >
              {children}
            </Content>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};
