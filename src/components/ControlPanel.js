import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {state, dispatch} = useContext(store);
    return <div>
        <p>{state.region}</p>
        <button className="myButton" onClick={() => dispatch({type: 's1'})}>Abruzzo,Italy</button>
        <button className="myButton" onClick={() => dispatch({type: 's2'})}>Amazonas,Brazil</button>
        <button className="myButton" onClick={() => dispatch({type: 's3'})}>Fujian,China</button>
        <button className="myButton" onClick={() => dispatch({type: 's4'})}>Gabon,Gabon</button>
        <button className="myButton" onClick={() => dispatch({type: 's5'})}>Serbia,Serbia</button>
    </div>;
}

export default ControlPanel;
