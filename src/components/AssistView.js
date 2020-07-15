import React, {useContext} from 'react';
import {store} from "../store";


function AssistView() {
    const {state} = useContext(store);
    if (state.left != null){
        return <div>
        <h5 font="">Visualization of epidemic data</h5>
        <p>2020.07.10 {state.region[0][state.left]}</p>
        <p>({state.latitude[0][state.left]},{state.longitude[0][state.left]})</p>
        </div>;
    }
    else{
        return <div>
        <h5 font="">Visualization of epidemic data</h5>
        <p>2020.07.10</p>
        </div>;
    }
}

export default AssistView;
