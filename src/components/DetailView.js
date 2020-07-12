import React, {useContext} from 'react';
import {store} from "../store";

function DetailView() {
  const {state} = useContext(store);
  
  return <div>
      <p>{state.latitude}+{state.longitude}</p>
      <p>{state.region}</p>
  </div>;
}

export default DetailView;
