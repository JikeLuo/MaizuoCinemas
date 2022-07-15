import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {TabBar, Tabs} from "antd-mobile";
import {AppOutline, UnorderedListOutline, UserOutline} from 'antd-mobile-icons'

import "../css/router.css"

const tabs = [
    {
        key: 'Top',
        title: '首頁',
        icon: <AppOutline/>
    },
    {
        key: 'Cinemas',
        title: '影院',
        icon: <UnorderedListOutline/>,
        badge: '5',
    },
    {
        key: 'Center',
        title: '個人中心',
        icon: <UserOutline/>,
    },
]

class App extends Component {
    render() {
        return (
            <div className="antdBottom">
                <TabBar onChange={(value) => {
                    console.log(value)
                    this.props.history.push("/" + value)
                }}>
                    {
                        tabs.map(item => (
                            <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                        ))
                    }
                </TabBar>
            </div>


            // <ul className="Navbar">
            //     <li>
            //         <NavLink to="/Top">Top</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/Cinemas">Cinemas</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/Center">Center</NavLink>
            //     </li>
            // </ul>

        );
    }
}

export default withRouter(App)