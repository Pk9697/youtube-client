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
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import { persistor, store } from '@/app/store'
import { Toaster } from '@/components/ui/toaster'
import Home from '@/pages/Home'
import Layout from '@/layouts/Layout'
import View from './pages/View'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="videos/view/:videoId" element={<View />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
