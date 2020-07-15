// 本文件处理数据逻辑

import React, {createContext, useReducer, useEffect} from 'react';
import {fetchCsvData} from "./api";

// 初始数据
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

// 不同请求的处理
const reducer = (state, action) => {
    switch (action.type) {
        case "Abruzzo": case "Acre": case "Afghanistan": case "Alabama": case "Alagoas": case "Alaska": 
        case "Albania": case "Alberta": case "Algeria": case "Amapa": case "Amazonas": case "Andorra": 
        case "Angola": case "Anguilla": case "Anhui": case "Argentina": case "Arizona": case "Arkansas": 
        case "Aruba": case "Australian Capital Territory": case "Austria": case "Azerbaijan": case "Bahia": 
        case "Bahrain": case "Bangladesh": case "Barbados": case "Basilicata": case "Beijing": case "Belarus": 
        case "Belgium": case "Belize": case "Benin": case "Bermuda": case "Bhutan": case "Bolivia": 
        case "Bonaire, Sint Eustatius and Saba": case "Bosnia and Herzegovina": case "Botswana": 
        case "British Columbia": case "British Virgin Islands": case "Brunei": case "Bulgaria": 
        case "Burkina Faso": case "Burma": case "Burundi": case "Cabo Verde": case "Calabria": 
        case "California": case "Cambodia": case "Cameroon": case "Campania": case "Cayman Islands": 
        case "Ceara": case "Central African Republic": case "Chad": case "Channel Islands": case "Chile": 
        case "Chongqing": case "Colombia": case "Colorado": case "Congo (Brazzaville)": case "Congo (Kinshasa)": 
        case "Connecticut": case "Costa Rica": case "Croatia": case "Cuba": case "Curacao": case "Cyprus": 
        case "Czechia": case "Delaware": case "Denmark": case "District of Columbia": case "Distrito Federal": 
        case "Djibouti": case "Dominica": case "Dominican Republic": case "Ecuador": case "Egypt": case "El Salvador": 
        case "Emilia-Romagna": case "Eritrea": case "Espirito Santo": case "Estonia": case "Eswatini": case "Ethiopia": 
        case "Faroe Islands": case "Fiji": case "Finland": case "Florida": case "France": case "French Guiana": 
        case "French Polynesia": case "Friuli Venezia Giulia": case "Fujian": case "Gabon": case "Gambia": case "Gansu": 
        case "Georgia": case "Georgia": case "Germany": case "Ghana": case "Gibraltar": case "Goias": case "Greece": 
        case "Greenland": case "Guangdong": case "Guangxi": case "Guatemala": case "Guinea": case "Guizhou": case "Guyana": 
        case "Hainan": case "Haiti": case "Hawaii": case "Hebei": case "Heilongjiang": case "Henan": case "Honduras": 
        case "Hong Kong": case "Hubei": case "Hunan": case "Hungary": case "Iceland": case "Idaho": case "Illinois": 
        case "India": case "Indiana": case "Indonesia": case "Inner Mongolia": case "Iowa": case "Iran": case "Iraq": 
        case "Ireland": case "Isle of Man": case "Israel": case "Jamaica": case "Japan": case "Jiangsu": case "Jiangxi": 
        case "Jilin": case "Jordan": case "Kansas": case "Kazakhstan": case "Kentucky": case "Kenya": case "Korea, South": 
        case "Kuwait": case "Kyrgyzstan": case "Latvia": case "Lazio": case "Lebanon": case "Liaoning": case "Liberia": 
        case "Libya": case "Liguria": case "Lithuania": case "Lombardia": case "Louisiana": case "Luxembourg": case "Macau": 
        case "Madagascar": case "Maine": case "Malawi": case "Malaysia": case "Mali": case "Manitoba": case "Maranhao": 
        case "Marche": case "Maryland": case "Massachusetts": case "Mato Grosso": case "Mato Grosso Do Sul": case "Mauritania": 
        case "Mauritius": case "Mexico": case "Michigan": case "Minas Gerais": case "Minnesota": case "Mississippi": 
        case "Missouri": case "Moldova": case "Molise": case "Mongolia": case "Montana": case "Montserrat": case "Morocco": 
        case "Mozambique": case "Namibia": case "Nebraska": case "Nepal": case "Netherlands": case "Nevada": 
        case "New Brunswick": case "New Caledonia": case "New Hampshire": case "New Jersey": case "New Mexico": 
        case "New South Wales": case "New York": case "New Zealand": case "Newfoundland and Labrador": case "Nicaragua": 
        case "Niger": case "Nigeria": case "Ningxia": case "North Carolina": case "North Dakota": case "Northern Territory": 
        case "Northwest Territories": case "Norway": case "Nova Scotia": case "Ohio": case "Oklahoma": case "Oman": 
        case "Ontario": case "Oregon": case "P.A. Bolzano": case "P.A. Trento": case "Pakistan": case "Panama": 
        case "Papua New Guinea": case "Para": case "Paraguay": case "Paraiba": case "Parana": case "Pennsylvania": 
        case "Pernambuco": case "Peru": case "Philippines": case "Piaui": case "Piemonte": case "Poland": case "Portugal": 
        case "Prince Edward Island": case "Puglia": case "Qatar": case "Qinghai": case "Quebec": case "Queensland": 
        case "Reunion": case "Rio De Janeiro": case "Rio Grande Do Norte": case "Rio Grande Do Sul": case "Romania": 
        case "Rondonia": case "Roraima": case "Russia": case "Rwanda": case "Saint Barthelemy": case "Saint Pierre and Miquelon": 
        case "Santa Catarina": case "Sao Paulo": case "Sardegna": case "Saskatchewan": case "Saudi Arabia": case "Senegal": 
        case "Serbia": case "Sergipe": case "Seychelles": case "Shaanxi": case "Shandong": case "Shanghai": case "Shanxi": 
        case "Sichuan": case "Sicilia": case "Sierra Leone": case "Singapore": case "Sint Maarten": case "Slovakia": 
        case "Slovenia": case "Somalia": case "South Africa": case "South Australia": case "South Carolina": case "South Dakota": 
        case "South Sudan": case "Spain": case "Sri Lanka": case "Sudan": case "Suriname": case "Sweden": case "Switzerland": 
        case "Syria": case "Taiwan": case "Tanzania": case "Tasmania": case "Tennessee": case "Texas": case "Thailand": 
        case "Tianjin": case "Tibet": case "Timor-Leste": case "Tocantins": case "Togo": case "Toscana": 
        case "Trinidad and Tobago": case "Tunisia": case "Turkey": case "Turks and Caicos Islands": case "Uganda": 
        case "Ukraine": case "Umbria": case "United Arab Emirates": case "United Kingdom": case "Uruguay": case "Utah": 
        case "Uzbekistan": case "Valle d'Aosta": case "Veneto": case "Venezuela": case "Vermont": case "Victoria": case "Vietnam": 
        case "Virginia": case "Washington": case "West Virginia": case "Western Australia": case "Wisconsin": case "Wyoming": 
        case "Xinjiang": case "Yukon": case "Yunnan": case "Zambia": case "Zhejiang": case "Zimbabwe":

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

// 创建数据中心的这样一个上下文，一般称为store
const store = createContext();

// 包装成数据组件
function StateProvider({children}) {
    // 绑定数据以及数据处理方法
    const [state, dispatch] = useReducer(reducer, initialState);

    // 初始化时，读取本地数据
    useEffect(() => {
        fetchCsvData('./cut.csv')
          .then(res => {
              dispatch({
                  type: 'init',
                  payload: res
              })
          })
    }, [])

    // 为子元素包裹上数据的上下文环境，方便所有子元素读取
    return <store.Provider value={{state, dispatch}}>
        {children}
    </store.Provider>
}

export {store, StateProvider}
