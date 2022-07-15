import {connect} from "react-redux";
import React, {useEffect} from "react";
import TopAxios from "../../Redux/ReduxAction/topAxios";

const OpenCC = require('opencc-js');
const converter = OpenCC.Converter({from: 'cn', to: 'tw'});


function App(props) {
    const {TopAxios, topList} = props

    useEffect(() => {
        if (topList.length === 0) {
            // console.log('啟動TopAxios')
            TopAxios()
        } else {
            // console.log("Top使用記憶體的 store")
        }
    }, [topList, TopAxios])

    const HandleClick = (item) => {
        props.history.push(`/Detail/${item.filmId}`)
    }


    return (
        <div>
            <ul className="topList">
                {
                    topList.map(item =>

                        <li key={item.filmId} onClick={() => HandleClick(item)}>{converter(item.name)}
                            {/*<NavLink activeClassName={'Zeke'} to={`/Top/${item.filmId}`}>{item.name}</NavLink>*/}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        topList: state.topReducer.topList
    }
}

const mapDispatchToProps = {
    TopAxios
}


export default connect(mapStateToProps, mapDispatchToProps)(App)