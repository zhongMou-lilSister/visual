import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {dispatch} = useContext(store);
    return <div>
        <button className="myButton" onClick={() => dispatch({type: 'Shanghai'})}>Shanghai, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'Beijing'})}>Beijing, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'New York'})}>New York, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 'Hawaii'})}>Hawaii, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 'British Columbia'})}>British Columbia, Canada</button>
        <button className="myButton" onClick={() => dispatch({type: 'Gibraltar'})}>Gibraltar, U.K</button>
        <button className="myButton" onClick={() => dispatch({type: 'Spain'})}>Spain, Spain</button>
        <button className="myButton" onClick={() => dispatch({type: 'Singapore'})}>Singapore, Singapore</button>
        <button className="myButton" onClick={() => dispatch({type: 'Ireland'})}>Ireland, Ireland</button>
        <button className="myButton" onClick={() => dispatch({type: 'Abruzzo'})}>Abruzzo, Italy</button>
        <button className="myButton" onClick={() => dispatch({type: 'Amazonas'})}>Amazonas, Brazil</button>
        <button className="myButton" onClick={() => dispatch({type: 'Fujian'})}>Fujian, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'Gabon'})}>Gabon, Gabon</button>
        <button className="myButton" onClick={() => dispatch({type: 'Serbia'})}>Serbia, Serbia</button>
    </div>;
}

export default ControlPanel;
