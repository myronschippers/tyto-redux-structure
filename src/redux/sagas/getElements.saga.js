import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getElements() {
    console.log('Yay a generator saga function.... Happy Day?');
    try {
        const response = yield axios({
            method: 'GET',
            url: '/api/element'
        });
        // const response = yield axios.get('/api/element');
        yield put({
            type: 'SET_ELEMENTS',
            payload: response.data
        });
    } catch(err) {
        console.log('error fetching elements: ', err);
    }
}

// ONLY FOR REGISTRATION
function* getElementsSaga() {
    yield takeLatest('GET_ELEMENTS', getElements);
}

export default getElementsSaga;
