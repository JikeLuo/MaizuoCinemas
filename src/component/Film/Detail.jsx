import {connect} from "react-redux";
import React, {useEffect} from "react";
import {Show, Hide} from '../Redux/ReduxAction/isShow'


function App(props) {
    // console.log(props.match.params.ZekeId)
    // console.log(props.location.query.ZekeId)
    // console.log(props.location.state.ZekeId)

    console.log(props)



    const {Hide, Show, history} = props
    useEffect(()=>{ // 進來這頁面 讓Tabbar 進行怎樣的動作
        Hide()
        return () =>{
            console.log('離開了Center')
            Show()
        }
    },[Hide, Show])

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <button onClick={goBack}>返回</button>
            Detail
        </div>
    )
}

const mapDispatchToProps = {
    Show,
    Hide
}

/* connect( 給孩子傳的屬性, 給孩子的函數) */
export default connect(null, mapDispatchToProps)(App)