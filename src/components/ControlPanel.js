import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {state, dispatch} = useContext(store);
    console.log(state.data)
    return <div>
        <p>{state.count}</p>
        <p>{state.data}</p>
        <button class="myButton" onClick={() => dispatch({type: 's1'})}>Global</button>
        <button class="myButton" onClick={() => dispatch({type: 's2'})}>U.S.A</button>
        <button class="myButton" onClick={() => dispatch({type: 's3'})}>Spain</button>
        <button class="myButton" onClick={() => dispatch({type: 's4'})}>Italy</button>
        <button class="myButton" onClick={() => dispatch({type: 's5'})}>France</button>
        <button class="myButton" onClick={() => dispatch({type: 's6'})}>Germany</button>
    </div>;
}

export default ControlPanel;
