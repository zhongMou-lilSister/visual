import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

const initialState = {
    region: null,
    country: null,
    date: null,
    cases: null,
    new: null,
    population: null,
    landkm2: null,
    landdense: null,
    temp: null,
    uvb: null,
    left: null,
    right: null
};
const reducer = (state, action) => {
    switch (action.type) {
        case 's1':
            return {
                ...state,
                region: "Abruzzo,Italy",
                left: 0, 
                right: 191
            };
        case 's2':
            return {
                ...state,
                region: "Amazonas,Brazil", 
                left: 1922,
                right:2113
            };
        case 's3':
            return {
                ...state,
                region: "Fujian,China", 
                left: 17858,
                right: 18049
            };
        case 's4':
            return {
                ...state,
                region: "Gabon,Gabon", 
                left: 18050,
                right: 18241
            };
        case 's5':
            return {
                ...state,
                region: "Serbia,Serbia", 
                left: 49154,
                right: 49345
            };
        case 'init':
            // region: null,
            // country: null,
            // date: null,
            // cases: null,
            // new: null,
            // population: null,
            // landkm2: null,
            // landdense: null,
            // temp: null,
            // uvb: null
            const newDate = [];
            const newCases = []; 
            const newNew = [];
            const newPopulation = [];
            const newLandkm2 = [];
            const newLanddense = [];
            const newTemp = [];
            const newUvb = [];

            // TODO: use action.payload to update newData
            newDate.push(action.payload.map(item => item.date));
            newCases.push(action.payload.map(item => item.cases));
            newNew.push(action.payload.map(item => item.new));
            newPopulation.push(action.payload.map(item => item.population));
            newLandkm2.push(action.payload.map(item => item.land_KM2));
            newLanddense.push(action.payload.map(item => item.land_dens));
            newTemp.push(action.payload.map(item => item.temp));
            newUvb.push(action.payload.map(item => item.uvb));
            return {
                ...state,
                date: newDate,
                cases: newCases,
                new: newNew,
                population: newPopulation,
                landkm2: newLandkm2,
                landdense: newLanddense,
                temp: newTemp,
                uvb: newUvb,
            };
        default:
            throw new Error();
    }
}
const store = createContext();

function StateProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchCsvData('./cut.csv')
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
