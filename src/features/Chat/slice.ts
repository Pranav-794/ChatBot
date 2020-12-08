import {createSlice} from '@reduxjs/toolkit';
import { Question } from '../../services/api';

export interface QuestionState {
  questions: Question[],
}

function getInitialState(): QuestionState {
  return {
    questions: [],
  }
};

const questionSlice = createSlice({
  name: 'questions',
  initialState: getInitialState(),
  reducers: {
    setQuestions: (state, action) => {
      return {...state, questions: action.payload};
    },
  },
});

const {actions, reducer} = questionSlice;
export const {setQuestions} = actions;
export default reducer;
