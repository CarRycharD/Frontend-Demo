import axios from "axios";
import { useFormik } from "formik";
import { PORT } from "../utils/config";
import { foodValidationSchema } from "../utils/FoodValidation";
import { refresh } from "../utils/Refresh";
import FoodModul from "./FoodModul";


const FoodUpdate = ({foodName, foodAmount, foodUnit, foodId} : {foodName: string, foodAmount: number, foodUnit: string, foodId: string}) => {

  const updateFood = (name: string, unit?: string, amount?: number) => {

    let foodDetails;

    if ( unit === '' && amount === 0) {
      foodDetails = {"name": name}
    } else {
      foodDetails = {"name": name, "details": {"unit": unit, "amount": amount}}
    }

    axios
    .put(`http://localhost:${PORT}/api/v1/food/${foodId}`, foodDetails, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(refresh)
    .catch((error) => console.log(error))
  }

  const formik = useFormik({
    initialValues: {
      name: '' || foodName,
      amount: '' || foodAmount,
      unit: '' || foodUnit
    },
    validationSchema: foodValidationSchema,
    onSubmit: (values) => {
      updateFood(values.name, values.unit, values.amount);
    },

  });

  return (
    <FoodModul
    formik={formik}
    button='Update'
    />
   );
}

export default FoodUpdate;
