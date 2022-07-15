import React, {useEffect} from "react";
import store from '../Redux/store'
import {Show, Hide} from '../Redux/ReduxAction/isShow'

export default function App(props) {

    useEffect(()=>{ // 進來這頁面 讓Tabbar 進行怎樣的動作
        store.dispatch(Hide())
        return () =>{
            console.log('離開了Center')
            store.dispatch(Show())
        }
    },[])

    return (
        <div>
            Center
        </div>
    )
}