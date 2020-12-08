import {EnhancedStore} from '@reduxjs/toolkit';
import {configureAppStore, RootState} from '../../configs/store';

let store: EnhancedStore<RootState>;

export default function getStore(): EnhancedStore<RootState> {
  if (!store) {
    store = configureAppStore();
    return store;
  }
  return store;
}
