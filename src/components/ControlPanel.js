import React, {useContext} from 'react';
import {store} from "../store";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       height: 400,
//       maxWidth: 300,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));
  
// function renderRow(props) {
//     const { index, style } = props;
  
//     return (
//       <ListItem button style={style} key={index}>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItem>
//     );
// }
  
// renderRow.propTypes = {
//     index: PropTypes.number.isRequired,
//     style: PropTypes.object.isRequired,
// };

// export default function VirtualizedList() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
//                 {renderRow}
//             </FixedSizeList>
//         </div>
//     );
// }


function ControlPanel() {
    const {dispatch} = useContext(store);
    return <div>
        <button className="myButton" onClick={() => dispatch({type: 'Shanghai'})}>Shanghai, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'Beijing'})}>Beijing, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'New York'})}>New York, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 'Hawaii'})}>Hawaii, U.S.A</button>
        <button className="myButton" onClick={() => dispatch({type: 'British Columbia'})}>British Columbia, Canada</button>
        <button className="myButton" onClick={() => dispatch({type: 'Gibraltar'})}>Gibraltar, U.K</button>
        <button className="myButton" onClick={() => dispatch({type: 'Spain'})}>Spain, Spain</button>
        <button className="myButton" onClick={() => dispatch({type: 'Singapore'})}>Singapore, Singapore</button>
        <button className="myButton" onClick={() => dispatch({type: 'Ireland'})}>Ireland, Ireland</button>
        <button className="myButton" onClick={() => dispatch({type: 'Abruzzo'})}>Abruzzo, Italy</button>
        <button className="myButton" onClick={() => dispatch({type: 'Amazonas'})}>Amazonas, Brazil</button>
        <button className="myButton" onClick={() => dispatch({type: 'Fujian'})}>Fujian, China</button>
        <button className="myButton" onClick={() => dispatch({type: 'Gabon'})}>Gabon, Gabon</button>
        <button className="myButton" onClick={() => dispatch({type: 'Serbia'})}>Serbia, Serbia</button>
    </div>;
}

export default ControlPanel;
