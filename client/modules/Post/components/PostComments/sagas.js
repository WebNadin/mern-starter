import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_COMMENTS, FETCH_COMMENTS } from './types';
import { showLoader, hideLoader } from './actions';

async function fetchComments() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=5');
  return await response.json();
}

export function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchComments);
    yield put({ type: FETCH_COMMENTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(hideLoader());
  }
}

export function* sagaWatcher() {
  yield takeEvery(REQUEST_COMMENTS, sagaWorker);
}

