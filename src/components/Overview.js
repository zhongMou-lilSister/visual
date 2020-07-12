import React, {useContext} from 'react';
import {store} from "../store";


function Overview() {
    const {state} = useContext(store);

    return <div>
        <p>{state.count}</p>
    </div>;
}

export default Overview;
