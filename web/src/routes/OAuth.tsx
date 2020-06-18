import React, { ReactElement, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useLocalStorageState } from '@umijs/hooks'

export default function OAuth(): ReactElement {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  // TODO: Exception handling
  const [code, setCode] = useLocalStorageState('code', '')
  useEffect(() => {
    const codeParam = params.get('code')
    codeParam && setCode(codeParam)
    console.log(`Auth code: ${codeParam}`)
  }, [code, params, setCode])
  return <Redirect to="/" />
}
