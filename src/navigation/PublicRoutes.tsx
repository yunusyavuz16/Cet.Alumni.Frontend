import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'

const PublicRoutes = () => {
    return (
        <Routes>
            <Route element={<div></div>}>
                <Route path='home' element={<HomePage />} />
                {/* <Route path='registration' element={<Registration />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route index element={<Login />} /> */}
            </Route>
        </Routes>
    )
}

export default PublicRoutes