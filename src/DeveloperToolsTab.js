import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Dice from './DiceAssets/Dice';
import EventKit from './EventKitAssets/EventKit';
import GeointAppStore from './GeointAppStoreAssets/GeointAppStore';
import GeointServicesExchange from "./GeointServiceExchangeAssets/GeointServicesExchange";
import GeoPackage from "./GeoPackageAssets/GeoPackage";
import GeoTrellis from "./GeoTrellisAssets/GeoTrellis";
import GeoWave from "./GeoWaveAssets/GeoWave";
import HighSpeedImageryServices from "./HighSpeedImageryServicesAssets/HighSpeedImageryServices";
import Mage from "./MageAssets/Mage";
import Mapcache from './MapcacheAssets/Mapcache';
import MrGeo from './MrGeoAssets/MrGeo';
import OpenSensorHub from './OpenSensorHubAssets/OpenSensorHub';
import OpenStreetMap from './OpenStreetMapAssets/OpenStreetMap';
import RocketChat from './RocketChat';
import DeveloperToolsComingSoon from './DeveloperToolsComingSoon';
import GeoGig from './GeoGigAssets/GeoGig';
import GeoMesa from './GeoMesaAssets/GeoMesa';
import Piazza from './PiazzaAssets/Piazza';
import Crunchy from './CrunchyAssets/Crunchy';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom:'15px',
  },
});


function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="paper-inner-container">
      <Paper className={classes.root} elevation={1}>
        <Dice />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <EventKit />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeoGig />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeointAppStore />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeointServicesExchange />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeoMesa />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeoPackage />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeoTrellis />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeoWave />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <HighSpeedImageryServices/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Mage/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Mapcache/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <MrGeo/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <OpenSensorHub/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <OpenStreetMap/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Piazza/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Crunchy/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <RocketChat/>
      </Paper>
      <DeveloperToolsComingSoon />
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
