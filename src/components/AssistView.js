import React, {useContext} from 'react';
import {store} from "../store";


function AssistView() {
    const {state} = useContext(store);
    console.log(state.case)
    return <div>
    <h3 font="">世界疫情数据可视化</h3>
    <p>2020.07.10</p>
    <p>{state.region}</p>
    console.log(state.region);
</div>;
}

export default AssistView;
