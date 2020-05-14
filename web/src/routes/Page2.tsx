import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

export default (): ReactElement<{}> => {
  return (
    <PageErrorBoundary>
      <div>Page 2</div>
    </PageErrorBoundary>
  )
}
