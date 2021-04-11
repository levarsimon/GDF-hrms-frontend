import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PersonalInformationForm from './EmployeeProfileComponents/PersonalInformationForm';
//import AddressForm from './EmployeeProfileComponents/AddressForm';
import ContactForm from './EmployeeProfileComponents/ContactForm';
import OfficialInformationForm from './EmployeeProfileComponents/OfficialInformationForm';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

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
  
   careerButton: {
     marginLeft: '20px,'
   }

}));

export default function EmployeeProfileLayout(props) {
  const classes = useStyles();
  const params = useParams();
  const [employeeInfo, setEmployeeInfo] = useState({});
  const [employeeAddress, setEmployeeAddress] = useState({});
  
  let regNumber = params.regNum;
  let empId;

  useEffect(() => {
    const getEmpInfo = async () => {
      if(regNumber){
        const info = await Axios.get("GetInfo/RegimentNumber/" + regNumber);    
        setEmployeeInfo(info.data);        
      }
    };
    const getEmpAddress = async () => {
      if(regNumber){
        const addressInfo = await Axios.get("EmployeeInfo/GetEmployeeAddressByTheirId?employeeId=3");
        setEmployeeAddress(addressInfo.data);
      }
    };
    getEmpInfo();
    getEmpAddress();
  }, [regNumber]);

  empId = employeeInfo.id;
  console.log(empId);
  console.log(employeeInfo);
  function FormRow() {
    return (   
      <div>
        < Grid container spacing={3}>          
          <Grid item xs={12}>
            <PersonalInformationForm employeeInfo={employeeInfo}></PersonalInformationForm>
          </Grid>

          <Grid item xs={12}>
           {/* <AddressForm employeeInfo={employeeAddress}></AddressForm>*/}
          </Grid>

          <Grid item xs={12}>
            <ContactForm employeeInfo={employeeInfo}></ContactForm>
          </Grid >

          <Grid item xs={12}>
            <OfficialInformationForm employeeInfo={employeeInfo}></OfficialInformationForm>
          </Grid >
        </Grid>           
      </div>      
    );
  } 
  return (
    <div className={classes.root}>
      <Grid container spacing={1} >
        <Grid item xs={6}>
         <h1>Employee Profile Page</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>
            <Button variant="outlined" color="primary">
              <Link to={'/add-address/' + empId}>Add Employee Address</Link>
            </Button>
            <Button variant="outlined" color="primary">
              <Link to={'/employee-history-view/' + empId}>View Career History</Link>
            </Button>
          </h1>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
