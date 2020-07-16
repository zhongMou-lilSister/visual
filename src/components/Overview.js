import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tooltip title="total cases" arrow><Tab label="Cases"  {...a11yProps(0)} /></Tooltip>
          <Tooltip title="cases of deaths" arrow><Tab label="Death"  {...a11yProps(1)} /></Tooltip>
          <Tooltip title="new cases" arrow><Tab label="New Cases"  {...a11yProps(2)} /></Tooltip>
          <Tooltip title="travel intensity" arrow><Tab label="Migration"  {...a11yProps(3)} /></Tooltip>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <iframe src="model_bmap.html" width='100%' height='309' title="navigation"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe src="model_bmap_death.html" width='100%' height='309' title="navigation"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe src="model_bmap_deta.html" width='100%' height='309' title="navigation"></iframe>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <iframe runat="server" id="iframes2" src="http://liunick2000.club/fenyeceshi/model_bmap.php?data=2020-02-29&city=" width="100%" height="400"  title="navigation" scrolling="no"></iframe>
      </TabPanel>
    </div>
  );
}
