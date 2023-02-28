
import { put, takeEvery } from 'redux-saga/effects'
import { login as loginAction, setUser as setUserAction, logout as logoutAction } from './userStore'

export function* login(action) {
    console.log('start login...', action)
    sessionStorage.setItem('token', `${action.payload.email} : ${action.payload.password}`)
    yield put({ type: setUserAction.type, payload: action.payload })
}

export function* logout(action) {
    console.log('start logout...', action)
    sessionStorage.removeItem('token')
    yield put({ type: setUserAction.type, payload: null })
}

export default function* rootSaga() {
    yield takeEvery(loginAction.type, login)
    yield takeEvery(logoutAction.type, logout)
}