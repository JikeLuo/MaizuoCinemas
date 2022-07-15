import React,{} from "react";
import {Redirect, Route, Switch, NavLink} from "react-router-dom";
import nested1 from './onHot'
import nested2 from './comingSoon'

export default function App() {


    return (
        <div>

            <div style={{height:"200px", backgroundColor: "skyblue"}}>File1</div>
            <div>
                <NavLink to="/File1/nested1" activeClassName="ZekeActive">nested1</NavLink>
            </div>
            <div>
                <NavLink to="/File1/nested2">nested2</NavLink>
            </div>

            <Switch>
                <Route path="/File1/nested1" component={nested1}/>
                <Route path="/File1/nested2" component={nested2}/>

                <Redirect from="/File1/" to="/File1/nested1"/>
            </Switch>

        </div>
    )
}