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
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('departmentId' in fieldValues)
        temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This field is required."
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
}


  const {
    values,
    setValues,
    errors,
    setErrors,
   resetForm,
    handleInputChange,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("porbando..");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.InputAtom
            variant="outlined"
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />

          <Controls.InputAtom
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
            
          />

          <Controls.InputAtom
            variant="outlined"
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.InputAtom
            variant="outlined"
            label="City"
            name="city"
            value={values.city}
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
             name="departmentId"
             label="Department"
             value={values.departmentId}
             onChange={handleInputChange}
             options={employeeService.getDepartmentCollection()}
             error={errors.departmentId}
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
            <Controls.ButtonAtom text="Reset" color="default" onClick={resetForm}/>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
