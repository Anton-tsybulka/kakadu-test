import { put, call, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
const apiUrl = 'http://users.bugred.ru/tasks/rest/list';

const getUsers = () => {
   return axios
      .get(apiUrl)
      .then((result) => result.data.resources)
      .catch((error) => {
         throw error;
      });
}

function* fetchUsers() {
   try {
      const users = yield call(getUsers);
      yield put({ type: 'GET_USERS_SUCCESS', payload: users });
   } catch (error) {
      yield put({ type: 'USERS_FAILED', message: error.message });
   }
}

function* usersSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}



export { usersSaga };
