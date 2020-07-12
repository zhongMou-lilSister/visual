import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

const initialState = {
    region: null,
    country: null,
    latitude: null,
    longitude: null,
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
                country: "Italy",
                latitude: 42.1920119,
                longitude: 13.7289167,
                left: 0, 
                right: 190
            };
        case 's2':
            return {
                ...state,
                region: "Amazonas,Brazil", 
                country: "Brazil",
                latitude: -65.8560646,
                longitude: -3.4168427,
                left: 1922,
                right:2112
            };
        case 's3':
            return {
                ...state,
                region: "Fujian,China", 
                country: "China",
                latitude: 26.4836842,
                longitude: 117.9249002,
                left: 17858,
                right: 18048
            };
        case 's4':
            return {
                ...state,
                region: "Gabon,Gabon", 
                country: "Gabon",
                latitude: -0.803689,
                longitude: 11.609444,
                left: 18050,
                right: 18240
            };
        case 's5':
            return {
                ...state,
                region: "Serbia,Serbia", 
                country: "Serbia",
                latitude: 44.016521,
                longitude: 21.005859,
                left: 49154,
                right: 49344
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
