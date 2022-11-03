import { Box, Button, Dialog, TextField} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';


const FoodCreate = () => {

  const [open, setOpen] = useState(false);

  const createNewFood = (name: string, unit?: string, amount?: number) => {

    let foodDetails;

    if ( unit === undefined && amount === undefined) {
      foodDetails = {"name": name}
    } else {
      foodDetails = {"name": name, "details": {"unit": unit, "amount": amount}}
    }
    axios
    .post('http://localhost:9090/api/v1/food/', foodDetails, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then((response) => console.log(response))
    .catch((error) => console.log(error) )
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      unit: '',
      amount: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      unit: Yup.string().when('amount', {
        is: (amount: any) => amount,
        then:Yup.string().required()
      }),
      amount: Yup.number().when('unit', {
        is: (unit: any) => unit,
        then:Yup.number().required()
      }),

    },
    [['unit', 'amount']]),
    onSubmit: (values) => {
      createNewFood(values.name);
    }
  });

  return (
    <Box m={20} textAlign='center'>
      <Button variant="contained" color="error" onClick={() => setOpen(true)}>Add new food</Button>
      <Dialog fullWidth maxWidth={'sm'}  open={open} onClose={() => setOpen(false)}>
      <form onSubmit={formik.handleSubmit}>
      <TextField
      name="name"
      size="medium"
      type="text"
      variant="outlined"
      placeholder="Name"
      margin="dense"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
      /><TextField
      name="unit"
      size="medium"
      type="text"
      variant="outlined"
      placeholder="Unit"
      margin="dense"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.unit}
      error={formik.touched.unit && Boolean(formik.errors.unit)}
      helperText={formik.touched.unit && formik.errors.unit}
      /><TextField
      name="amount"
      size="medium"
      type="number"
      variant="outlined"
      placeholder="Amount"
      margin="dense"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.amount}
      error={formik.touched.amount && Boolean(formik.errors.amount)}
      helperText={formik.touched.amount && formik.errors.amount}
      />
      <Button type="submit">Submit</Button>
      </form>
      </Dialog>
    </Box>
   );
}

export default FoodCreate;
