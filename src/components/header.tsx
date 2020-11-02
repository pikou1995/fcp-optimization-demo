import React from 'react'
import {
  FormOutlined,
  HomeOutlined,
  TableOutlined,
  LineChartOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const { Header } = Layout

export default function HeaderComponent() {
  const { pathname } = useLocation()
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        <Menu.Item key="/">
          <Link to="/">
            <HomeOutlined /> Home
          </Link>
        </Menu.Item>
        <Menu.Item key="/form">
          <Link to="/form">
            <FormOutlined /> Form
          </Link>
        </Menu.Item>
        <Menu.Item key="/table">
          <Link to="/table">
            <TableOutlined /> Table
          </Link>
        </Menu.Item>
        <Menu.Item key="/chart">
          <Link to="/chart">
            <LineChartOutlined /> Chart
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
