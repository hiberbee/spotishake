import React, { ReactElement } from 'react'
import PageErrorBoundary from 'src/components/PageErrorBoundary'

export default function ProfilePage(): ReactElement<{}> {
  return (
    <PageErrorBoundary>
      <div>Profile</div>
    </PageErrorBoundary>
  )
}
