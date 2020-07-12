import React, {useContext} from 'react';
import {store} from "../store";

function AssistView() {
    const {state} = useContext(store);
    
    return <div>
        <p>{state.data}</p>
        <p>{state.count}</p>
    </div>;
}

export default AssistView;
