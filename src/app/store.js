import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import { authReducer } from '@/features/authentication'
import { videosReducer, videoReducer } from '@/features/videos'
import { channelReducer } from '@/features/channel'
import appReducer from './appSlice'
import { tweetsReducer } from '@/features/tweets'
import { subscriptionReducer } from '@/features/subscription'
import { playlistReducer } from '@/features/playlist'
import { searchReducer } from '@/features/search'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  videos: videosReducer,
  video: videoReducer,
  channel: channelReducer,
  tweets: tweetsReducer,
  subscription: subscriptionReducer,
  playlist: playlistReducer,
  search: searchReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

export { store, persistor }
