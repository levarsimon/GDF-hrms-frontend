import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
//import SimpleSelect from '../SimpleSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        flexGrow: 1,
    }, 
  },
  
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AddEmployeeAddressForm() {  
  const classes = useStyles();
  //const SexOption = ["Male","Female"];
  function FormRow() {
    return (
      <React.Fragment>
        <div>
          <Grid item xs={2}>
            <TextField name="addressLot" label="Lot" variant="outlined" size="small" />
          </Grid>
        </div>
        <div>
          <Grid item xs={2}>
            <TextField name="addressStreet" label="Street" variant="outlined" size="small" />
          </Grid>
        </div>
        <div>
          <Grid item xs={2}>
            <TextField name="addressArea" label="AreaSection" variant="outlined" size="small" />
          </Grid >
        </div>
        <div>
          <Grid item xs={2}>
            <TextField name="addressVillage" label="Village" variant="outlined" size="small" />
          </Grid >
        </div>
        <div>
          <Grid item xs={2}>
            <TextField name="regionId" label="Region" variant="outlined"  size="small" />
          </Grid >
        </div>
        <div>
          <Grid item xs={2}>
            <TextField name="countryId" label="Country" variant="outlined" size="small" />
          </Grid >
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
      <h4>Address </h4>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}