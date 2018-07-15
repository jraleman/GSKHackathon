import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

class ModalDialog extends React.Component {
  constructor (props) {
    super(props);
    this._title = this.props.title;
    this._description = this.props.description;
    this._cover = this.props.cover;
    this._onPress = this.props.onPress;
    this.state = {
      open: true
    };
    return ;
  }
  handleOpen = () => {
    this.setState({ open: true });
    return ;
  }
  handleClose = () => {
    this.setState({ open: false });
    return ;
  }
  transitionEffect (props) {
    return (
      <Slide
        direction={ "up" }
        {...props}
      />
    );
  }
  render () {
    return (
      <div>
        <Dialog
          open={ this.state.open }
          TransitionComponent={ this.transitionEffect }
          keepMounted
          onClose={ this.handleClose }
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            { this._title }
          </DialogTitle>
          <DialogContent>
            <img
              alt={ this._title }
              src={ this._cover }
              style={{ width: '100%' }}
            />
            <DialogContentText id="alert-dialog-slide-description">
              { this._description }
            </DialogContentText>
            <Button onClick={ this._onPress }>
              { "Open Storybook" }
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={ this.handleClose }
              color="primary"
            >
              { "Close" }
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ModalDialog;
