import { FC } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MasterLayout from '../layout/MasterLayout'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>

        <Route path='error/*' element={<div>Hata oluştu</div>} />
        <Route path='logout' element={<div>logout</div>} />
        {/* TODO : isAuthenticated and redux connect */}
        {false ?
          <>
            <Route path='/*' element={<PrivateRoutes />} />
            <Route index element={<Navigate to='/home' />} /></>
          : <>
            <Route path='/*' element={<PublicRoutes />} />
            <Route index element={<Navigate to='/home' />} />
          </>}
      </Route>
    </Routes >
  )
}

const AppRoutesLocal: FC = () => {
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
  )
}

export default AppRoutesLocal