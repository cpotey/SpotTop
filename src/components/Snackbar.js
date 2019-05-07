import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';




const styles = {
    addPlaylist: {
        fontFamily: 'Cera',
        borderRadius: '500px',
        padding: '1rem 2rem 0.9rem',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#1db954',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        lineHeight: '1',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: '.3s ease',
        marginTop: '1rem',
        zIndex: '1000',
        '&:hover': {
            background: "#179c46",
          }
    },
    playlistSnackbar: {
        position: 'relative',
        right: '0',
        bottom: '0',
        zIndex:'1'
    }

    
};
  



class SimpleSnackbar extends React.Component {
  state = {
    open: false,
  };

  

  handleClick = () => {
    this.setState({ open: true });
    // console.log(this);
    this.props.createPlaylist(this.props.token,this.props.userID,this.props.activeID,this.props.topTracksArray);
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  

  render() {
    const { classes } = this.props;
    return (
      <div className="reverseFlex" >
        <Button className={classes.addPlaylist} onClick={this.handleClick}>Add playlist to Spotify</Button>
        <Snackbar className={classes.playlistSnackbar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={1500}
          onClose={this.handleClose}
          TransitionComponent={Slide}
          ContentProps={{
            'aria-describedby': 'message-id',
            'className':'added'
          }}
          message={<span id="message-id">Playlist added!</span>}
          action={[
            
            ]}
          
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleSnackbar);