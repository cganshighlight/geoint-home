import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Gitlab from './GitlabAssets/Gitlab';
import Grafana from './Grafana';
import Jenkins from './Jenkins';
import Nexus from './Nexus';
import PivotalCloudFoundry from './PivotalCloudFoundry';
import Redmine from './Redmine';
import RocketChat from './RocketChat';
import SelfService from './SelfService';
import SonarQube from './SonarQube';
import SwaggerEditor from './SwaggerEditor';
import ThreadFix from './ThreadFix';
import Uchiwa from './Uchiwa';
import DevOpsToolsComingSoon from './DevOpsToolsComingSoon';


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
        <Gitlab />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Grafana />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Jenkins />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Nexus />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <PivotalCloudFoundry />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Redmine />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <RocketChat />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <SelfService />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <SonarQube />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <SwaggerEditor />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <ThreadFix />
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Uchiwa />
      </Paper>
      <DevOpsToolsComingSoon />
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
