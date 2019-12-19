import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postElement(action) {
    try {
        // sending item to server for saving
        yield axios.post('/api/element', action.payload);
        // updating the redux store state after post finishes
        yield put({ type: 'GET_ELEMENTS' });
    } catch(err) {
        console.error('Something went wrong with POST: ', err);
    }
}

function* postElementSaga() {
    yield takeLatest('POST_ELEMENT', postElement);
}

export default postElementSaga;