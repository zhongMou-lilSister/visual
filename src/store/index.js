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
    right: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'Abruzzo': case 'Amazonas': case 'Fujian': case 'Gabon': case 'Serbia': case 'Shanghai':
        case 'Beijing': case 'Beijing': case 'New York': case 'Hawaii': case 'British Columbia': 
        case 'Gibraltar': case 'Spain': case 'Singapore': case 'Ireland':

            return {
                ...state,
                left: state.region[0].findIndex((n) => n === action.type) + 1, 
                right: state.region[0].findIndex((n) => n === action.type) + 191
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
            const newRegion = [];
            const newDate = [];
            const newCases = []; 
            const newNew = [];
            const newPopulation = [];
            const newLandkm2 = [];
            const newLanddense = [];
            const newTemp = [];
            const newUvb = [];
            const newLat = [];
            const newLog = [];

            // TODO: use action.payload to update newData
            newRegion.push(action.payload.map(item => item.region_name));
            newDate.push(action.payload.map(item => item.date));
            newCases.push(action.payload.map(item => item.cases));
            newNew.push(action.payload.map(item => item.new));
            newPopulation.push(action.payload.map(item => item.population));
            newLandkm2.push(action.payload.map(item => item.land_KM2));
            newLanddense.push(action.payload.map(item => item.land_dens));
            newTemp.push(action.payload.map(item => item.temp));
            newUvb.push(action.payload.map(item => item.uvb));
            newLat.push(action.payload.map(item => item.latitude));
            newLog.push(action.payload.map(item => item.longitude));

            return {
                ...state,
                region: newRegion,
                date: newDate,
                cases: newCases,
                new: newNew,
                population: newPopulation,
                landkm2: newLandkm2,
                landdense: newLanddense,
                temp: newTemp,
                uvb: newUvb,
                latitude: newLat,
                longitude: newLog
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
