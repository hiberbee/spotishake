import React, { ReactElement } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { usePlaylistsQuery } from '../types/api'
import { QuestionCircleOutlined } from '@ant-design/icons'

type Props = { children: ReactElement }

export default function DefaultLayout({ children }: Props): ReactElement<{}> {
  const { data } = usePlaylistsQuery()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider>
        <div
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            height: 60,
            width: 250,
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.ItemGroup key={'playlists'} title={'My Playlists'}>
            {data?.playlists.map(p => (
              <Menu.Item key={`playlist-${p.id}`} icon={<img alt={p.name} src={p.image} />}>
                <Link to={`/playlists/${p.id}`}>{p.name}</Link>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, height: 64 }}
        >
          <Menu selectable={false} style={{ float: 'right' }} theme={'dark'} mode={'horizontal'}>
            <Menu.Item key="about" icon={<QuestionCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          SpotiShake © {new Date().getFullYear()} Created by{' '}
          <a href="https://github.com/hiberbee/spotishake.com">Hiberbee</a>
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
