import { Button, Menu, Badge, Dropdown, Avatar, Image } from "antd";
import Link from "next/link";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { FaBell, FaChevronDown, FaKeycdn } from "react-icons/fa";

interface NavbarProps {
  user: string;
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export const Navbar: React.FC<NavbarProps> = ({ user }) => {
  let navbar;
  if (user === "user") {
    navbar = (
      <>
        <div className="header">
        <Link href="/">
          <div style={{alignItems: 'center', display: 'flex', cursor: 'pointer'}}>
            
            <FaKeycdn style={{fontSize: 35, fontWeight:'bold'}}/>
            <div style={{fontSize: 20, fontWeight:'bold'}}>goJobs</div>
            
          </div>
          </Link>
          <Menu
            mode="horizontal"
            
          >
            <Menu.Item key="1" className="menu-item">
              <Link href="/jobs">
                Jobs
              </Link>
            </Menu.Item>
            <Menu.Item key="5" className="menu-item">
              <Link href="/jobs/new-job">
                Post Job
              </Link>
            </Menu.Item>
            <Menu.Item key="2">Companies</Menu.Item>
            <Menu.Item key="3" className="menu-item">
            <Button type="link">

            <Link href="/login">
              
                Login
              </Link>
              </Button>

            </Menu.Item>
            <Menu.Item key="4" className="menu-item">
              <Button type="link" size="large" style={{fontWeight:'bold'}}>
              <Link href="/register">
                Sign up
                </Link>
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  } else if (user === "admin") {
    navbar = (
      <div className="header">
      
        <div>
          <Button
            type="primary"
            size="large"
            icon={<BsPlus style={{ fontSize: 20 }} />}
            style={{ margin: "0 auto !important" }}
          >
            Post new Job
          </Button>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          
          <Menu.Item  key="2" style={{ marginTop: "5px" }} className="menu-item">
            <Badge count={3}>
              <FaBell style={{ fontSize: 25 }} />
            </Badge>
          </Menu.Item >
          <Menu.Item  key="3">
          <Link href="/admin">
          <Button type="link" style={{fontWeight:'bold'}}>My Account</Button>
          </Link>
            
                
          </Menu.Item >
        </Menu>
      </div>
    );
  }
  return <>{navbar}</>;
};
