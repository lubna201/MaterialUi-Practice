import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { theme } from '../../../theme'
import { ThemeProvider } from '@material-ui/core';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      backgroundColor: theme.palette.background.white,
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: "10px",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const FormPart = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange1 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Lorem Ipsum
    </Typography>
        <Grid container spacing={2} justify="center">
          <form className={classes.root} autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <div>
              <TextField
                id="filled-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your currency"
                variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <AccountCircle />
                </Grid>
                <Grid item>
                  <TextField id="input-with-icon-grid" label="With a grid" />
                </Grid>
              </Grid>
              <FormControlLabel
                control={<Checkbox checked={state.checkedA} onChange={handleChange1} name="checkedA" />}
                label="Secondary"
              />
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Birthday"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
              <Button variant="contained" color="primary" href="#outlined-buttons">
                Submit
                    </Button>
            </div>
          </form>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default FormPart;