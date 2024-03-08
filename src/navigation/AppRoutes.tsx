import { FC, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PublicRoutes = lazy(() => import('./PublicRoutes'));
const MasterLayout = lazy(() => import('../layout/MasterLayout'));
const PrivateRoutes = lazy(() => import('./PrivateRoutes'));


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
    <AppRoutes />
  )
}

export default AppRoutesLocal