import userSagas from './user/userSaga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    console.log('rootSaga')
    yield all([
        userSagas()
    ]);
  }