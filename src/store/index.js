import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

const initialState = {
    count: "Global",
    data: null
};
const reducer = (state, action) => {
    switch (action.type) {
        case 's1':
            return {
                ...state,
                count: "Global",
                // data: action.payload[2].Country
            };
        case 's2':
            return {
                ...state,
                count: "U.S.A"
            };
        case 's3':
            return {
                ...state,
                count: "Spain"
            };
        case 's4':
            return {
                ...state,
                count: "Italy"
            };
        case 's5':
            return {
                ...state,
                count: "France"
            };
        case 's6':
            return {
                ...state,
                count: "Germany"
            };
        case 'init':
            var newData = [];
            for (let index = 30; index < 60; index++) {
                newData[index-1] = action.payload[index].TotalDiagnoses;
                
            }   
            // TODO: use action.payload to update newData
            return {
                ...state,
                data: newData
            };
        default:
            throw new Error();
    }
}
const store = createContext();

function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchCsvData('./data.csv')
          .then(res => {
              dispatch({
                  type: 'init',
                  payload: res
              })
          })
    }, [])

    return <store.Provider value={{state, dispatch}}>
        {children}
    </store.Provider>
}

export {store, StateProvider}
