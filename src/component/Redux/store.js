import {applyMiddleware, combineReducers, createStore, compose} from "@reduxjs/toolkit";
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

/* reducers */
import tabbarReducer from "./Reducer/tabbarReducer";
import cityReducer from "./Reducer/cityReducer";
import cinemasReducer from "./Reducer/cinemasReducer";
import topReducer from "./Reducer/topReducer";

/* redux persist */
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


/* Redux Devtool */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


/* root Reducer */
const reducer = combineReducers({
    cityReducer, // 兩個相等
    cinemasReducer,
    topReducer,
    tabbarReducer,
})
// const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))


/* Redux-Persist */
const persistConfig = {
    key: 'ZekePersist',
    storage,
    whitelist: ['cityReducer']
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(reduxThunk, reduxPromise)))

export const persistor = persistStore(store)
export default store

// export default store



// export default store


/* createStore 源碼分析 */
// function ZekeCreateStore(reducer) {
//     let list = []   /* 訂閱者清單 */
//     let state = reducer(undefined, {})
//
//     function dispatch(action) {
//         state = reducer(state, action) 	 // 複製新狀態
//         for (let k in list) {			// k 為 key，list 為 value
//             /* 啟動dispatch list所有代碼走一遍 */
//             list[k] && list[k]()
//         }
//     }
//
//     function subscribe(callback) {
//         list.push(callback)				// 向訂閱者清單添加訂閱者
//     }
//
//     function getState() {				// 訂閱者獲得屬性來使用
//         return state
//     }
//
//     return {
//         dispatch,
//         subscribe,
//         getState,
//     }
// }