import { render } from '@testing-library/react'
import IndexPage from './IndexPage'
import React from 'react'

test('index page is rendering', () => {
  const { getByText } = render(<IndexPage />)
  const linkElement = getByText('Welcome')
  expect(linkElement).toBeDefined()
})
