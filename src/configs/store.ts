import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import sagaMiddlewareFactory from 'redux-saga';
import rootSaga from './sagas';

// Slices
import QuestionSlice, {
  QuestionState,
} from '../features/Chat/slice';

export type RootState = {
  questions: QuestionState;
};

export function configureAppStore(): EnhancedStore<RootState> {
  const loggerMiddleware = createLogger({
    predicate: () => __DEV__,
  });
  const sagaMiddleware = sagaMiddlewareFactory();

  const store = configureStore({
    reducer: {
      questions: QuestionSlice,
    },
    middleware: [loggerMiddleware, sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
