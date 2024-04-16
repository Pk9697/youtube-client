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
import {
  Home,
  Login,
  Register,
  View,
  Profile,
  SearchResults,
  Subscriptions,
  History,
  Subscribers,
  Settings,
  LikedVideos,
  WatchLater,
} from '@/pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.VIEW} element={<View />} />
          <Route path={`${ROUTES.PROFILE}/:userName`} element={<Profile />} />
          <Route path={`${ROUTES.SEARCH}/:query`} element={<SearchResults />} />
          <Route path={ROUTES.SUBSCRIPTIONS} element={<Subscriptions />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
          <Route path={ROUTES.SUBSCRIBERS} element={<Subscribers />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.LIKED_VIDEOS} element={<LikedVideos />} />
          <Route path={ROUTES.WATCH_LATER} element={<WatchLater />} />
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
