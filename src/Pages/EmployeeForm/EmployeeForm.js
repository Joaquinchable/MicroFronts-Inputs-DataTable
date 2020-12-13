import React from "react";
import Controls from "../../Components/controls/Controls";
import { useForm, Form } from "../../Components/useForm";
import { Grid } from "@material-ui/core";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "name", title: "Male" },
  { id: "famle", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  fullName: " ",
  email: " ",
  mobile: " ",
  city: " ",
  gender: " ",
  departmentid: " ",
  hireDate: new Date(),
  isPermanent: false,
};

const EmployeeForm = () => {
  const { values, setValues, handleInputChange } = useForm(initialFValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.InputAtom
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />

          <Controls.InputAtom
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <Controls.InputAtom
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.InputAtom
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={6}>
          <Controls.RadioGrupAtom
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          />
          <Controls.SelecAtom
            name="departamentId"
            label="Department"
            value={values.departmentid}
            onChange={handleInputChange}
            options={employeeService.getDepartmenCollection()}
          />
          <Controls.DatePickerAtom
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckboxAtom
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.ButtonAtom type="Submit" text="Submit" />
            <Controls.ButtonAtom text="Reset" color="default" />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
