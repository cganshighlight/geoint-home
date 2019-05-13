import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import GeointAppStoreSass from './GeointAppStoreSass.scss';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <div
          aria-owns={anchorEl ? 'GasMenu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <span className="caret">&#9660;</span>
        </div>
        <Menu
          id="GasMenu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Home Page</MenuItem>
          <MenuItem onClick={this.handleClose}>Facts Sheet</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;