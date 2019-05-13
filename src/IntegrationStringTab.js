import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BeachFront from './BeachFrontAssets/BeachFront';
import BoundlessConnect from './BoundlessSuiteAssets/BoundlessConnect';
import BoundlessDesktop from './BoundlessDesktopAssets/BoundlessDesktop';
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
import StoryScapes from './StoryScapesAssets/StoryScapes';
import VoyagerSearch from './VoyagerSearch';
import Wstamp from './Wstamp';
import IntegrationStringComingSoon from './IntegrationStringComingSoon';

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
        <BeachFront />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <BoundlessConnect />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <BoundlessDesktop />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Dice />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <EventKit />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeointAppStore />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <GeointServicesExchange />
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
        <RocketChat/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <StoryScapes/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <VoyagerSearch/>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Wstamp/>
      </Paper>
      <IntegrationStringComingSoon />
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
