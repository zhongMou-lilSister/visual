import React, {useContext} from 'react';
import {store} from "../store";

function AssistView() {
    const {state} = useContext(store);
    console.log(state.case)
    return <div>
    <p>2020.07.10</p>
</div>;
}

export default AssistView;
