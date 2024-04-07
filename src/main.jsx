import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import '@/index.css'
import { ROUTES } from '@/data/constants'
import { persistor, store } from '@/app/store'
import { Toaster } from '@/components/ui/toaster'
import Layout from '@/layouts/Layout'
import PrivateRoute from '@/components/PrivateRoute'
import { Home, Login, Register, View, Profile } from '@/pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="videos/view/:videoId" element={<View />} />
          <Route path="users/profile/:userName" element={<Profile />} />
        </Route>
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
      <Toaster />
    </PersistGate>
  </Provider>
)
