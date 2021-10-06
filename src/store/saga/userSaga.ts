import { all, call, put, take, fork } from "redux-saga/effects";
import {
    DataLogin,
    ResponseLogin,
} from "../../interface/request/UserRespository";
import { SET_LOGIN } from "../const";
import API from "../../request";
import { AxiosResponse } from "axios";
import { setUser } from "../actions/userAction";

function* login(data: DataLogin) {
    const res: AxiosResponse<ResponseLogin> = yield call(API.user.login, data);
    yield put(setUser(res.data.user, res.data.token));
    localStorage.setItem("token", res.data.token);
    console.log("login success", res.data);
}

function* waitLogin() {
    while (true) {
        try {
            const { dataLogin } = yield take(SET_LOGIN);
            yield call(login, dataLogin);
        } catch (err) {
            console.log("login error", err);
        }
    }
}

function* userSaga() {
    yield all([
        // takeEvery(USER_FETCH_REQUESTED, fetchUser),
        // takeLatest(SET_LOGOUT, logOut),
        fork(waitLogin),
    ]);
}

export default userSaga;
