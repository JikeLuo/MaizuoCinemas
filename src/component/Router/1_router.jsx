import {connect} from "react-redux";
import React, {Component, useEffect} from "react";
import {Route, HashRouter, Switch, Redirect, BrowserRouter} from "react-router-dom";
import File1 from '../Film/TopFile/File2'
import File2 from '../Film/TopFile/File1'
import NotFound from './404NotFound'
import Navbars from "../Film/2_NavBar"
import Center from "../Film/Center"
import Cinemas from "../Film/Cinemas";
import Top from "../Film/Top"
import Detail from "../Film/Detail"
import Login from "../Film/login"
import store from "../Redux/store";
import City from "../Film/City/city"
import Search from '../Film/Search'


const isAuth = () => {
    // 回傳不為 null 則 true
    return localStorage.getItem("token")
}


class App extends Component {


    render() {
        return (
            <HashRouter classname="antdBody">
                {/*{console.log(this.props)}*/}
                {this.props.isShow && <Navbars/>}

                <Switch>
                    <Route path="/Top" component={Top}/>
                    <Route path="/Cinemas" component={Cinemas}/>
                    <Route path="/Search" component={Search}/>
                    <Route path="/city" component={City}/>
                    <Route path="/File1" component={File1}/>
                    <Route path="/File2" component={File2}/>


                    {/* 重新導向 */}
                    <Redirect from="/" to="/Top" exact/>


                    {/* 路由攔截 */}
                    <Route path="/Login" component={Login}/>:
                    <Route path="/Center" render={() => {
                        return isAuth() ? <Center/> : <Redirect to="/login"/>
                    }}/>

                    {/* 攜帶參數 */}
                    <Route path="/Detail/:ZekeId" component={Detail}/>
                    <Route path="/Detail" component={Detail}/>
                    {/*<Route path="/Cinemas" component={Personal}/>*/}


                    {/* 如果不匹配，最後來到這裡 */}
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                isShow: store.getState().tabbarReducer.show
            })
        })

    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return  {
        isShow: state.tabbarReducer.show
    }
}


export default connect(mapStateToProps)(App)