import React, {useContext} from 'react';
import {store} from "../store";


function AssistView() {
    const {state} = useContext(store);
    if (state.left != null){
        return <div >
        <h4>2020.07.10 {state.region[0][state.left]}</h4>
        <h7>({state.latitude[0][state.left]},{state.longitude[0][state.left]})</h7>
        </div>;
    }
    else{
        return <div>
        <h4>2020.07.10 Choose a City</h4>
        </div>;
    }
}

export default AssistView;
