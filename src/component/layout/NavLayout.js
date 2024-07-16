import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '../ErrorBoundary.ts'

const NavLayout = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading data...</h3>}>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </>
  )
}

export default NavLayout
