import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import UserDetails from './UserDetails';

export type RootState = ReturnType<typeof store.getState>;

const UserData_={
    key: 'UserData_',
    storage: AsyncStorage,
}
const UserData2_={
    key: 'UserData2_',
    storage: AsyncStorage,
}
const UserData3_={
    key: 'UserData3_',
    storage: AsyncStorage,
}

const persistedUserDataReducer=persistReducer(UserData_, UserDetails);
const persistedUserData2Reducer=persistReducer(UserData2_, UserDetails);
const persistedUserData3Reducer=persistReducer(UserData3_, UserDetails);




const persistedRootReducer = combineReducers({

  
    UserData_:persistedUserDataReducer,
    UserData2_:persistedUserData2Reducer,
    UserData3_:persistedUserData3Reducer,
});

export const store = configureStore({

    reducer: persistedRootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})
export const persistor = persistStore(store);




