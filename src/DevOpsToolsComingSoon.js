import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Apigee from './Apigee';



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
    <div className="paper-subdued-container">
        <h1>Coming Soon</h1>
        <Paper className={classes.root} elevation={1}>
            <Apigee />
        </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
