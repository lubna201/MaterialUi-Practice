import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import pic from '../../../images/2.jpg'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  paper: {
    paddingTop: "50px",
    color: theme.palette.text.secondary,
  },
  roo1: {
    height: "2000px"
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6}>
          <img src={pic} alt="" style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={6} >
          <Typography variant="h2" gutterBottom className={classes.paper}>
            Lorem Ipsum
                    </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Lorem ipsum dolor sit amet
                    </Typography>
          <Typography variant="body2" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
            unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
          <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
              Slide in alert dialog
            </Button>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Let Google help apps determine location. This means sending anonymous location data to
                  Google, even when no apps are running.
          </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Disagree
          </Button>
                <Button onClick={handleClose} color="secondary">
                  Agree
          </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;