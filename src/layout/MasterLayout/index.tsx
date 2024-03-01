import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Outlet />
        </Suspense>
    )
}

export default MasterLayout