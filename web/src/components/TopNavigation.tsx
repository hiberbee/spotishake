import React, { ReactElement } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { QuestionCircleOutlined, UserOutlined } from '@ant-design/icons'
import { useMeQuery } from '../types/api'
import { useLocalStorageState } from '@umijs/hooks'

export function TopNavigation(): ReactElement {
  const [code] = useLocalStorageState('code', '')
  const { data } = useMeQuery({ variables: { code } })

  return (
    <Menu selectable={false} style={{ float: 'right' }} theme={'dark'} mode={'horizontal'}>
      <Menu.Item key="login" icon={<UserOutlined />}>
        {!code || !data?.me ? (
          <Link to="/login">Login</Link>
        ) : (
          <Link to="/profile">{data.me.displayName}</Link>
        )}
      </Menu.Item>
      <Menu.Item key="about" icon={<QuestionCircleOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  )
}
