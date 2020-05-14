import React, { ReactElement } from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

type Props = { children: ReactElement }

function PlaylistsLayout({ children }: Props): ReactElement<{}> {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Page 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <Link to="/page">Page 2</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/page">Hello Antdesign who stylize the link</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/page">Page 2</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 68 }}
        />
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default PlaylistsLayout
