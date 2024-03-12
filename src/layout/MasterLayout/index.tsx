import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Login from '../Login'
import Register from '../Register'

const MasterLayout = () => {
    const [hideLogin, setHideLogin] = useState(true)
    const [hideRegister, setHideRegister] = useState(true)
    const handleLoginVisibility = () => {
        setHideLogin(prev => !prev)
    }

    const handleCloseLogin = () => {
        setHideLogin(true)
    }

    const handleRegisterVisibility = () => {
        setHideLogin(prev => !prev)
    }

    const handleCloseRegister = () => {
        setHideRegister(true)
    }
    const handleShowRegister = () => {
        setHideRegister(false);
        setHideLogin(true);
    }

    return (
        <Suspense fallback={<div>loading...</div>}>
            {!hideLogin && <Login handleShowRegister={handleShowRegister} onClose={handleCloseLogin} />}
            {!hideRegister && <Register onClose={handleCloseRegister} />}

            <div className='w-full'>
                <Navbar handleLoginVisibility={handleLoginVisibility} />
                <Outlet />
            </div>

        </Suspense>
    )
}

export default MasterLayout