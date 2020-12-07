import {Question} from '../../../../services/api';

export function getNextQuestion(questions: Question[], id: number) {
  return questions.find((item) => item.id === id);
}

export function validateResponse(
  currQuestion: Question,
  response: string,
): number | undefined {
  switch (typeof currQuestion.validation) {
    case 'boolean':
      return validateBoolean(currQuestion);
    case 'string':
      return validateRegEx(response, currQuestion, currQuestion.validation);
    case 'object':
      return validateSetArray(currQuestion, response);
    default:
      break;
  }
  return undefined;
}

export function validateBoolean(currQuestion: Question) {
  if (currQuestion.validation === true) {
    return returnPossiblePath(currQuestion, '');
  } else {
    return undefined;
  }
}

export function validateRegEx(
  response: string,
  currQuestion: Question,
  regExpression: string,
) {
  const regEx = new RegExp(regExpression);
  if (regEx.test(response.toLowerCase())) {
    return returnPossiblePath(currQuestion, response);
  } else {
    return undefined;
  }
}

export function validateSetArray(currQuestion: Question, response: string) {
  if (Array.isArray(currQuestion.validation)) {
    if (
      currQuestion.validation.findIndex(
        (item) => item.toLowerCase() === response.toLowerCase(),
      ) !== -1
    ) {
      return returnPossiblePath(currQuestion, response);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function returnPossiblePath(currQuestion: Question, response: string) {
  if (currQuestion.paths === undefined) {
    return -1;
  } else if (typeof currQuestion.paths === 'number') {
    return currQuestion.paths;
  } else if (typeof currQuestion.paths === 'object') {
    return currQuestion.paths[response];
  } else {
    return undefined;
  }
}
