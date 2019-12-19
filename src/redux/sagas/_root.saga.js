import { all } from 'redux-saga/effects';
import getElementsSaga from './getElements.saga';
import postElementSaga from './postElements.saga';
 
// this is the saga that will watch for actions
function* rootSaga() {
    console.log('In Watcher Saga');
    // yield takeEvery('GET_ELEMENTS', getElementsSaga);
    // yield takeEvery('POST_ELEMENT', postElementSaga);
    yield all(
        [
            getElementsSaga(),
            postElementSaga(),
        ]
    );
}

export default rootSaga;