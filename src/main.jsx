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
import { Home, Login, Register, View, Profile, SearchResults } from '@/pages'
import FeedSubscriptions from './pages/FeedSubscriptions'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.VIEW} element={<View />} />
          <Route path={`${ROUTES.PROFILE}/:userName`} element={<Profile />} />
          <Route path={`${ROUTES.SEARCH}/:query`} element={<SearchResults />} />
          <Route path={ROUTES.FEED} element={<FeedSubscriptions />} />
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
