import React, {Component} from 'react';
import store from '../../Redux/store'
import '../../css/antd.css'


function City(props) {
    let list = ["台北", "高雄", "台中", "新竹", "基隆"]

    return (
        <div className='cityDiv'>
            <h3>選擇城市</h3>
            <ul className='cityList'>
                {
                  list.map(item =>
                      <li key={item} onClick={()=>{
                          store.dispatch({
                              type: "changeCity",
                              payload: item
                          })

                          props.history.goBack()
                      }}>{item}</li>
                  )
                }
            </ul>
        </div>
    );
}

export default City;