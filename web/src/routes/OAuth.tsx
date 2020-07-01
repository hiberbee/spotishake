import React, { ReactElement, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import useLoginCode from '../hooks/useLoginCode'

export default function OAuth(): ReactElement {
  const location = useLocation()
  // TODO: Exception handling
  const [code, setCode] = useLoginCode()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const codeParam = params.get('code')
    codeParam && setCode(codeParam)
    console.log(`Auth code: ${codeParam}`)
  }, [code, location.search, setCode])
  return <Redirect to="/" />
}
