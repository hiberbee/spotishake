import React, { ReactElement } from 'react'
import { Layout, Menu, PageHeader } from 'antd'
import { Link } from 'react-router-dom'
import { usePlaylistsQuery } from '../types/api'
import { TopNavigation } from '../components/TopNavigation'

type Props = { children: ReactElement }

export default function DefaultLayout({ children }: Props): ReactElement<{}> {
  const { data } = usePlaylistsQuery()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider width={250}>
        <Link to={'/'}>
          <div className={'logo'} />
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.ItemGroup key={'playlists'} title={<PageHeader title={'My Playlists'} />}>
            {data?.playlists.map(p => (
              <Menu.Item key={`playlist-${p.id}`}>
                <Link to={`/playlists/${p.id}`}>{p.name}</Link>
              </Menu.Item>
            ))}
          </Menu.ItemGroup>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className="site-layout-sub-header-background">
          <TopNavigation />
        </Layout.Header>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          SpotiShake © {new Date().getFullYear()} Created by{' '}
          <a href="https://github.com/hiberbee/spotishake">Hiberbee</a>
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
