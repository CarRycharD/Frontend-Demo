import { Box } from "@mui/system";
import axios from "axios";
import { useFormik } from "formik";
import { foodCreateStyles } from "../styles/styles";
import { PORT } from "../utils/config";
import { foodValidationSchema } from "../utils/FoodValidation";
import { FoodEntry } from "../utils/Interfaces";
import { refresh } from "../utils/Refresh";
import FoodModul from "./FoodModul";

const FoodCreate = () => {

  const createNewFood = (name: string, unit?: string, amount?: number) => {

    let foodDetails;

    if ( unit === '' && amount === 0) {
      foodDetails = {"name": name}
    } else {
      foodDetails = {"name": name, "details": {"unit": unit, "amount": amount}}
    }

    axios
    .post(`http://localhost:${PORT}/api/v1/food/`, foodDetails, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(refresh)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: 0,
      unit: ''
    },
    validationSchema: foodValidationSchema,
    onSubmit: (values: FoodEntry) => {
      createNewFood(values.name, values.unit, values.amount);
    }
  });

  return (
    <Box sx={foodCreateStyles}>
      <FoodModul
      formik={formik}
      button='Create'
      />
    </Box>
   );
}

export default FoodCreate;
