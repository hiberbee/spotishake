import { render } from '@testing-library/react'
import AboutPage from './AboutPage'
import React from 'react'

test('about page is rendering', () => {
  const { getByText } = render(<AboutPage />)
  const linkElement = getByText('About')
  expect(linkElement).toBeDefined()
})
