import { useLocalStorageState } from '@umijs/hooks'

type LoginCode = [string, (code: string) => void]

export default function useLoginCode(code = ''): LoginCode {
  return useLocalStorageState('code', code)
}
