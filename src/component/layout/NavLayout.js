import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const NavLayout = () => {
  return (
    <>
      <Suspense fallback={<h3>Loading data...</h3>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default NavLayout
