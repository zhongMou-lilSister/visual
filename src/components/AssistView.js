import React, {useContext} from 'react';
import {store} from "../store";


function AssistView() {
    const {state} = useContext(store);
    if (state.left != null){
        return <div className="addicon">
        <h4>Region: {state.region[0][state.left]}</h4>
        <h4>Country: {state.country[0][state.left]}</h4>
{/*         <h4>Latitude: {state.latitude[0][state.left]}</h4>
        <h4>Longitude: {state.longitude[0][state.left]}</h4> */}
        {/* <h7>({state.latitude[0][state.left]},{state.longitude[0][state.left]})</h7> */}
        </div>;
    }
    else{
        return <div className="addicon">
        <h4>Choose a Region in Control View Below</h4>
        </div>;
    }
}

export default AssistView;
