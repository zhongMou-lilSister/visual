import React, {useContext} from 'react';
import {store} from "../store";

function AssistView() {
    const {state} = useContext(store);
    const {dispatch} = useContext(store);
    return <div></div>;
}

export default AssistView;
