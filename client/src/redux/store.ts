import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { instructorReducer } from "./reducers/instructorSlice";
import { courseReducer } from "./reducers/courseSlice";
import {studentReducer} from "./reducers/studentSlice.tsx"

const persistConfig = {
  key: 'root', // Key to use for storing data in storage
  storage,     // Storage mechanism (local storage or session storage)
  whitelist: ['course', 'student', 'instructor'],
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  auth: authReducer,
  student: studentReducer,
  instructor: instructorReducer,
  course:courseReducer
}));

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
});

const persistor = persistStore(store); 



export type State = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store , persistor};


