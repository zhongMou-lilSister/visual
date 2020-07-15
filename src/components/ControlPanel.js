import React, {useContext} from 'react';
import {store} from "../store";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 900,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function VirtualizedList() {
  const classes = useStyles();
  const {dispatch} = useContext(store);

  function renderRow(props) {
    const { index, style } = props;
    const RegionArray=["Shanghai","Beijing","New York","Hawaii","British Columbia","Gibraltar","Spain","Singapore","Ireland",
    "Abruzzo","Amazonas","Fujian","Gabon","Serbia","Acre","Afghanistan","Alabama","Alagoas","Alaska","Albania","Alberta","Algeria",
    "Amapa","Andorra","Angola","Anguilla","Anhui","Argentina","Arizona","Arkansas",
    "Aruba","Australian Capital Territory","Austria","Azerbaijan","Bahia","Bahrain","Bangladesh",
    "Barbados","Basilicata","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
    "Bolivia","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana",
    "British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cabo Verde","Calabria",
    "California","Cambodia","Cameroon","Campania","Cayman Islands","Ceara","Central African Republic","Chad",
    "Channel Islands","Chile","Chongqing","Colombia","Colorado","Congo (Brazzaville)","Congo (Kinshasa)","Connecticut",
    "Costa Rica","Croatia","Cuba","Curacao","Cyprus","Czechia","Delaware","Denmark","District of Columbia",
    "Distrito Federal","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Emilia-Romagna",
    "Eritrea","Espirito Santo","Estonia","Eswatini","Ethiopia","Faroe Islands","Fiji","Finland","Florida","France",
    "French Guiana","French Polynesia","Friuli Venezia Giulia","Gambia","Gansu","Georgia","Georgia",
    "Germany","Ghana","Goias","Greece","Greenland","Guangdong","Guangxi","Guatemala","Guinea","Guizhou","Guyana",
    "Hainan","Haiti","Hebei","Heilongjiang","Henan","Honduras","Hong Kong","Hubei","Hunan","Hungary","Iceland",
    "Idaho","Illinois","India","Indiana","Indonesia","Inner Mongolia","Iowa","Iran","Iraq","Isle of Man","Israel",
    "Jamaica","Japan","Jiangsu","Jiangxi","Jilin","Jordan","Kansas","Kazakhstan","Kentucky","Kenya","Korea, South","Kuwait",
    "Kyrgyzstan","Latvia","Lazio","Lebanon","Liaoning","Liberia","Libya","Liguria","Lithuania","Lombardia","Louisiana",
    "Luxembourg","Macau","Madagascar","Maine","Malawi","Malaysia","Mali","Manitoba","Maranhao","Marche","Maryland",
    "Massachusetts","Mato Grosso","Mato Grosso Do Sul","Mauritania","Mauritius","Mexico","Michigan","Minas Gerais","Minnesota",
    "Mississippi","Missouri","Moldova","Molise","Mongolia","Montana","Montserrat","Morocco","Mozambique","Namibia","Nebraska",
    "Nepal","Netherlands","Nevada","New Brunswick","New Caledonia","New Hampshire","New Jersey","New Mexico","New South Wales",
    "New Zealand","Newfoundland and Labrador","Nicaragua","Niger","Nigeria","Ningxia","North Carolina","North Dakota",
    "Northern Territory","Northwest Territories","Norway","Nova Scotia","Ohio","Oklahoma","Oman","Ontario","Oregon","P.A. Bolzano",
    "P.A. Trento","Pakistan","Panama","Papua New Guinea","Para","Paraguay","Paraiba","Parana","Pennsylvania","Pernambuco","Peru",
    "Philippines","Piaui","Piemonte","Poland","Portugal","Prince Edward Island","Puglia","Qatar","Qinghai","Quebec","Queensland",
    "Reunion","Rio De Janeiro","Rio Grande Do Norte","Rio Grande Do Sul","Romania","Rondonia","Roraima","Russia","Rwanda",
    "Saint Barthelemy","Saint Pierre and Miquelon","Santa Catarina","Sao Paulo","Sardegna","Saskatchewan","Saudi Arabia",
    "Senegal","Serbia","Sergipe","Seychelles","Shaanxi","Shandong","Shanxi","Sichuan","Sicilia","Sierra Leone",
    "Sint Maarten","Slovakia","Slovenia","Somalia","South Africa","South Australia","South Carolina","South Dakota",
    "South Sudan","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tanzania","Tasmania","Tennessee",
    "Texas","Thailand","Tianjin","Tibet","Timor-Leste","Tocantins","Togo","Toscana","Trinidad and Tobago","Tunisia","Turkey",
    "Turks and Caicos Islands","Uganda","Ukraine","Umbria","United Arab Emirates","United Kingdom","Uruguay","Utah","Uzbekistan",
    "Valle d'Aosta","Veneto","Venezuela","Vermont","Victoria","Vietnam","Virginia","Washington","West Virginia","Western Australia",
    "Wisconsin","Wyoming","Xinjiang","Yukon","Yunnan","Zambia","Zhejiang","Zimbabwe"]
    
    //another array contain country name

    return (<div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}  
            style={style} >
                <ListItem button key={index} 
                onClick={() => dispatch({type: RegionArray[index]})}>
                    <ListItemText primary={`${RegionArray[index]}`} />  
                </ListItem>
            </div>
    );  
  }
  
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  return (
    <div className={classes.root}>
      <FixedSizeList height={300} width={200} itemSize={36} itemCount={325}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}




// function ControlPanel() {
//     const {dispatch} = useContext(store);
//     return <div>
//         <ul>
//         <li className="myButton" onClick={() => dispatch({type: 'Shanghai'})}>Shanghai, China</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Beijing'})}>Beijing, China</li>
//         <li className="myButton" onClick={() => dispatch({type: 'New York'})}>New York, U.S.A</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Hawaii'})}>Hawaii, U.S.A</li>
//         <li className="myButton" onClick={() => dispatch({type: 'British Columbia'})}>British Columbia, Canada</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Gibraltar'})}>Gibraltar, U.K</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Spain'})}>Spain, Spain</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Singapore'})}>Singapore, Singapore</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Ireland'})}>Ireland, Ireland</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Abruzzo'})}>Abruzzo, Italy</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Amazonas'})}>Amazonas, Brazil</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Fujian'})}>Fujian, China</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Gabon'})}>Gabon, Gabon</li>
//         <li className="myButton" onClick={() => dispatch({type: 'Serbia'})}>Serbia, Serbia</li>
//         </ul>
//     </div>;
// }

// export default ControlPanel;
