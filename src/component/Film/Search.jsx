import React, {useEffect, useMemo, useState} from "react";
import store from "../Redux/store";
import CinemasAxios from "../Redux/ReduxAction/cinemasAxios";
import {withRouter} from "react-router-dom";
const OpenCC = require('opencc-js');
const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });


function App(props) {

    const [cinemasList, setCinemasList] = useState(store.getState().cinemasReducer.cinemasList)
    const [myText, setMyText] = useState('')

    const cancelSearch = () => {
       props.history.push('/cinemas')
    }



    useEffect(() => {
        if (store.getState().cinemasReducer.cinemasList.length === 0) {
            console.log("啟動CinemasListAxios")
            store.dispatch(CinemasAxios())
        } else {
            console.log('search使用記憶體中的 store')
        }
        /* 訂閱後每次在不同組件dispatch 都會啟動 (Bad */
        let unsubscribe = store.subscribe(() => {
            setCinemasList(store.getState().cinemasReducer.cinemasList)
        })

        /* 取消訂閱 */
        return unsubscribe
    }, [])

    /* useMemo 後面的依賴值存有值，當依賴有變動執行前項函數，再附值給依賴 */
    const search = useMemo(() => cinemasList.filter(item => item.name.toUpperCase().includes(myText.toUpperCase()) || item.address.toUpperCase().includes(myText.toUpperCase())), [myText, cinemasList])

    return (
        <div>
            <div className="searchContainer">
                <input className="search" placeholder="搜尋" type="text" onChange={(e) => setMyText(e.target.value)}/>
                <div onClick={cancelSearch}>Cancel</div>
            </div>

            <div className="cinemasList">
                {
                    // search 因為使用 useMemo 有依賴(也就是裡面有存value)cinemasList，所以把它看作一個State
                    search.map(item =>
                        <dl key={item.cinemaId}>
                            <dt>{converter(item.name)}</dt>
                            <dd>{item.address}</dd>

                        </dl>
                    )}
            </div>
        </div>
    )
}

export default withRouter(App)