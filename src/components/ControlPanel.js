import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {state, dispatch} = useContext(store);
    return <div>
        <p>{state.region}</p>
        <p>{state.latitude}+{state.longitude}</p>
        <button className="myButton" onClick={() => dispatch({type: 's6'})}>Shanghai, China</button>
        <button className="myButton" onClick={() => dispatch({type: 's7'})}>Beijing, China</button>
        <button className="myButton" onClick={() => dispatch({type: 's8'})}>New York, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 's9'})}>Hawaii, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 's10'})}>British Columbia, Canada</button>
        <button className="myButton" onClick={() => dispatch({type: 's11'})}>Gibraltar, U.K</button>
        <button className="myButton" onClick={() => dispatch({type: 's12'})}>Spain, Spain</button>
        <button className="myButton" onClick={() => dispatch({type: 's13'})}>Singapore, Singapore</button>
        <button className="myButton" onClick={() => dispatch({type: 's14'})}>Ireland, Ireland</button>
        <button className="myButton" onClick={() => dispatch({type: 's1'})}>Abruzzo, Italy</button>
        <button className="myButton" onClick={() => dispatch({type: 's2'})}>Amazonas, Brazil</button>
        <button className="myButton" onClick={() => dispatch({type: 's3'})}>Fujian, China</button>
        <button className="myButton" onClick={() => dispatch({type: 's4'})}>Gabon, Gabon</button>
        <button className="myButton" onClick={() => dispatch({type: 's5'})}>Serbia, Serbia</button>
    </div>;
}

export default ControlPanel;
