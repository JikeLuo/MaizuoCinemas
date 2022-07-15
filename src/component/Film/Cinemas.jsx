import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import store from '../Redux/store'
import CinemasAxios from '../Redux/ReduxAction/cinemasAxios'
const OpenCC = require('opencc-js');
const converter = OpenCC.Converter({ from: 'cn', to: 'tw' });


function App(props) {

    const [cityName, setCityName] = useState(store.getState().cityReducer.cityName)
    const [cinemasList, setCinemasList] = useState(store.getState().cinemasReducer.cinemasList)

    useEffect(() => {
        if (store.getState().cinemasReducer.cinemasList.length === 0) {
            console.log("啟動CinemasListAxios")
            store.dispatch(CinemasAxios())
        } else {
            // console.log(cinemasList)
            console.log('cinemas使用記憶體中的 store')
        }
        /* 訂閱後每次在不同組件dispatch 都會啟動 (Bad */
        let unsubscribe = store.subscribe(() => {
            setCinemasList(store.getState().cinemasReducer.cinemasList)
        })

        /* 取消訂閱 */
        return unsubscribe
    }, [])

    // const Zeke = () => {
    //     console.log(props)
    //     props.history.push('/Zeke')
    // }

    const ChooseCity = () => {
        props.history.push('/city')
    }
    const Search = () => {
        props.history.push('/Search')
    }

    return (
        <div>
            <div className="cinemasTop">
                <div className="city" onClick={ChooseCity}>城市: {cityName}</div>
                <div className="searchbtn" onClick={Search}>搜尋</div>
            </div>

            <div className="cinemasList">
                {/*<div onClick={Zeke}>Cinemas</div>*/}
                {
                    cinemasList.map(item =>
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
