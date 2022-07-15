import {connect} from "react-redux";
import React, {useEffect, useState} from "react";
import store from "../../Redux/store";
import ComingSoonAxios from "../../Redux/ReduxAction/comingSoonAxios";

const OpenCC = require('opencc-js');
const converter = OpenCC.Converter({from: 'cn', to: 'tw'});


function App(props) {

    let {list, ComingSoonAxios, history} = props
    useEffect(() => {
        if (list.length === 0) {
            console.log('啟動comingSoonAxios')
            ComingSoonAxios()
        } else {
            console.log("comingSoon使用記憶體的 store")
        }
    }, [list, ComingSoonAxios])

    const HandleClick = (item) => {
        console.log(item)
        history.push(`/Detail/${item.filmId}`)


    }


    return (
        <div>
            <ul className="topList">
                {
                    list.map(item =>
                        <li key={item.filmId} onClick={() => HandleClick(item)}>{converter(item.name)}</li>
                    )
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.topReducer.comingSoonList
    }
}

const mapDispatchToProps = {
    ComingSoonAxios,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)