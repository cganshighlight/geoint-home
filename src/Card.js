import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SwipeDrawer from './SwipeDrawer';

function SimpleCard(props) {
  const { classes } = props;


  return (
    <Card>
      <CardContent>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (SimpleCard);