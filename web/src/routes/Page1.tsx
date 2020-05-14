import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

export default (): ReactElement<{}> => {
  return (
    <PageErrorBoundary>
      <div>About Page</div>
    </PageErrorBoundary>
  )
}
