import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

import { userReducer } from './user/userStore'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore(
  {reducer:{user:userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),}
)
export const action = type => store.dispatch( type )
sagaMiddleware.run(rootSaga)