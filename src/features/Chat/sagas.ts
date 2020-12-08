import {createAction, PayloadAction} from '@reduxjs/toolkit';
import {takeLatest, put, call} from 'redux-saga/effects';
import {AxiosError} from 'axios';
import Api from '../../services/api';
import { setQuestions } from './slice';

export const actions = {
  getQuestions: createAction('chat/getquestions'),
};

export function* getQuestionsFromBackend(action: PayloadAction) {
  try {
    const response = yield call(Api.questions);
    yield put(setQuestions(response.data));
  } catch (err) {}
}

function* watchGetQuestions() {
  yield takeLatest(actions.getQuestions, getQuestionsFromBackend);
}

export const sagas = {
  watchGetQuestions,
};
