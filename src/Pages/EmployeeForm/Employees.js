import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from './../../Components/PageHeader'
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone"; 
import { Paper, makeStyles } from '@material-ui/core';



const useStyles = makeStyles(theme  => ({
    pageContent: {

        margin:theme.spacing(5),
        padding: theme.spacing(3)

      
      },
    }));

 const Employees = () => {
     const classes = useStyles()
    return (
        <div>
             <PageHeader
          title="New Employee"
          subTitle="Form design with valitadion"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
        <Paper className= {classes.pageContent}>
        <EmployeeForm/>
        </Paper>
          
        </div>
    )
}

export default Employees;