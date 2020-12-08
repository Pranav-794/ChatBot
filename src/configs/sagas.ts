import {all, fork} from 'redux-saga/effects';
import {sagas as QuestionSagas} from '../features/Chat/sagas'

export default function* rootSaga() {
  yield all([fork(QuestionSagas.watchGetQuestions)]);
}
