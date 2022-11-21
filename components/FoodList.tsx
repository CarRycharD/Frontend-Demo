import { Box, List, Button, Typography } from "@mui/material";
import Link from "next/link";
import { foodListStyles } from "../styles/styles";
import { FoodEntry } from "../utils/Interfaces";
import FoodCreate from "./FoodCreate";
import FoodDelete from "./FoodDelete";
import FoodUpdate from "./FoodUpdate";
import Logout from "./Logout";

const FoodList = ({ foods } : { foods: FoodEntry[] }) => {
  return (
    <><Logout/>
    <Box sx ={foodListStyles.outerBox}>
      <FoodCreate />
      <List>
        {foods.length ? foods.map((food) => (
          <Box key={food._id} display="flex" alignItems="center">
            <Link href={"/food/" + food._id}><Button sx={foodListStyles.foodButton}>{food.name}</Button></Link>
            <FoodUpdate
            foodName = {food.name}
            foodAmount = {food.details ? food.details.amount : ''}
            foodUnit = {food.details ? food.details.unit : ''}
            foodId = {food._id}
            />
            <FoodDelete
            foodId = {food._id}
            foodName = {food.name}
             />
          </Box>
        )) : <Typography> There is no food in the database. </Typography>}
      </List>
    </Box>
    </>
   );
}

export default FoodList;
