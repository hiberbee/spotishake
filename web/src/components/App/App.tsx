import React, { lazy, ReactElement, Suspense, useCallback, useMemo } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ConfigProvider, Result, Spin } from 'antd'

import DefaultLayout from 'src/layouts/DefaultLayout'
import 'src/components/App/App.css'

const IndexPage = lazy(() => import('../../routes/IndexPage'))
const ProfilePage = lazy(() => import('../../routes/ProfilePage'))
const CallbackPage = lazy(() => import('../../routes/OAuth'))
const PlaylistPage = lazy(() => import('../../routes/Playlist'))
const AboutPage = lazy(() => import('../../routes/AboutPage'))
const NotFoundPage = lazy(() => import('../../routes/NotFoundPage'))

const scopes: Array<string> = [
  'user-read-private',
  'user-read-email',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'user-library-modify',
  'user-top-read',
]
const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const publicUri = process.env.REACT_APP_PUBLIC_URL ?? `https://spotishake.me`
const apiUri = process.env.REACT_APP_API_URL ?? 'https://api.spotishake.me/graphql'
const spotifyRedirectUri = `https://accounts.spotify.com/authorize?response_type=code&client_id=${spotifyClientId}&scope=${encodeURIComponent(
  scopes.join(' '),
)}&redirect_uri=${encodeURIComponent(`${publicUri}/oauth`)}`

export function App(): ReactElement {
  const client = useMemo<ApolloClient<NormalizedCacheObject>>(
    () =>
      new ApolloClient({
        cache: new InMemoryCache({
          resultCaching: true,
        }),
        connectToDevTools: true,
        uri: apiUri,
      }),
    [],
  )

  const RedirectCallback = useCallback(() => {
    window.location.href = spotifyRedirectUri
    return null
  }, [])

  return (
    <ConfigProvider>
      <ApolloProvider client={client}>
        <Router>
          <DefaultLayout>
            <Suspense
              fallback={<Result title={'Loading page...'} icon={<Spin spinning={true} />} />}
            >
              <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/about" component={AboutPage} />
                <Route exact path="/login" component={RedirectCallback} />
                <Route path="/oauth" component={CallbackPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/playlists/:id" component={PlaylistPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Suspense>
          </DefaultLayout>
        </Router>
      </ApolloProvider>
    </ConfigProvider>
  )
}
