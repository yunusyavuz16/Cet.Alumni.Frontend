import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const MasterLayout = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className='w-full'>
                <Navbar />
                <Outlet />
            </div>
        </Suspense>
    )
}

export default MasterLayout