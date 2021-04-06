//import { useState, useEffect } from 'react';
import ResponsiveDrawer from './components/Layout';
import React from "react";
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './components/searchpage';
import EmployeeProfileLayout from './components/EmployeeProfileLayout';
import CareerHistoryLayout from './components/CareerHistoryLayout';
import AddEmployeeInformation from './components/AddEmployeeInformation';
import AddEmployeeAddressForm from './components/AddEmployeeComponents/AddEmployeeAddressForm';
import HomePage from './components/Home';

const App = () => {
  
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer>
          <Route path="/" exact component={HomePage}/>
          {/*<Route path="/" exact render={(props) => (<><EmployeeProfileLayout employeePIs={employeePI}/></>)}/>*/}
          <Route path="/add-employee" exact component={AddEmployeeInformation} />
          <Route path="/employee-profile" exact component={EmployeeProfileLayout} />          
          <Route path="/employee-history" exact component={CareerHistoryLayout} />          
          <Route path="/search-page" exact component={SearchPage} />
          <Route path="/employee-profile/:regNum" exact component={EmployeeProfileLayout} />
          <Route path="/employee-history/:regNum" exact component={CareerHistoryLayout} />
          <Route path="/add-address/:empId" exact component={AddEmployeeAddressForm} />
      </ResponsiveDrawer>
      </BrowserRouter>
    </div>
  );
}

export default App;
