import { Box } from "@mui/system";
import axios from "axios";
import { useFormik } from "formik";
import { foodValidationSchema } from "../utils/FoodValidation";
import { FoodEntry } from "../utils/Interfacecs";
import FoodModul from "./FoodModul";

const createButton = {position: 'absolute',
left: '50%',
bottom: '100%',
transform: 'translate(-50%, -50%)'};

const FoodCreate = () => {

  const createNewFood = (name: string, unit?: string, amount?: number) => {

    let foodDetails;

    if ( unit === '' && amount === 0) {
      foodDetails = {"name": name}
    } else {
      foodDetails = {"name": name, "details": {"unit": unit, "amount": amount}}
    }

    axios
    .post(`http://localhost:9090/api/v1/food/`, foodDetails, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then((response) => console.log(response))
    .catch((error) => console.log(error) )
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
    <Box sx={createButton}>
      <FoodModul
      formik={formik}
      button='Create'
      />
    </Box>
   );
}

export default FoodCreate;
