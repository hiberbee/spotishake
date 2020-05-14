import React, { ReactElement, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'src/App.css'

import PlaylistsLayout from 'src/layouts/PlaylistsLayout'

const Page1 = lazy(() => import('../routes/Page1'))
const Page2 = lazy(() => import('../routes/Page2'))

export default function App(): ReactElement<{}> {
  return (
    <Router>
      <PlaylistsLayout>
        <Suspense fallback={<div>Loading Page...</div>}>
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page" component={Page2} />
          </Switch>
        </Suspense>
      </PlaylistsLayout>
    </Router>
  )
}
