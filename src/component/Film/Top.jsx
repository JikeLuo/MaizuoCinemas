import React, {Component} from "react";
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import nested1 from "./TopFile/onHot";
import nested2 from "./TopFile/comingSoon";
import {Swiper} from 'antd-mobile'
import '../css/antd.css'
import swiperAxios from "../Redux/ReduxAction/swiperAxios";
import {connect} from "react-redux";



class App extends Component{
    render() {
        return (
            <div>
                <div>
                    <Swiper autoplay={true} allowTouchMove={true} autoplayInterval={7000} style={{'--height': '200px'}}>
                        {
                            this.props.list.map(item =>
                                <Swiper.Item key={item.filmId}>
                                    <img src={item.poster} alt={item.filmId} className='img'/>
                                </Swiper.Item>
                            )
                        }
                    </Swiper>
                    <nav className="topNav">
                        <NavLink to="/Top/onHot" activeClassName="ZekeActive" className="nested">正在熱映</NavLink>
                        <NavLink to="/Top/comingSoon" activeClassName="ZekeActive" className="nested">即將上映</NavLink>
                    </nav>
                    <Switch>
                        <Route path="/Top/onHot" component={nested1}/>
                        <Route path="/Top/comingSoon" component={nested2}/>
                        <Redirect from="/Top/" to="/Top/onHot"/>
                    </Switch>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.swiperAxios()
    }
}


function state(state) {
    return {
        list: state.topReducer.swiperList
    }
}

const dispatch = {
    swiperAxios,
}

export default connect(state, dispatch)(App)