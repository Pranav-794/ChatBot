import axios from 'axios';

export enum Endpoint {
  QUESTIONS = '/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json',
}

export interface Question {
  id: number;
  question: string;
  validation: boolean | string[] | string;
  paths: number | {[key: string]: number} | undefined;
  style: string | undefined;
}

export default {
  questions: () => {
    return axios.get<Question[]>(Endpoint.QUESTIONS);
  },
};
