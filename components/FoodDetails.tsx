import { Box, Typography, Button } from "@mui/material";
import router from "next/router";
import { foodDetailsStyles } from "../styles/styles";
import { FoodEntry } from "../utils/Interfaces";

const FoodDetails = ({food}: FoodEntry) => {
  return (
    <Box sx={foodDetailsStyles.box}>
    <Typography>Details</Typography>
    <Typography>Name: {food?.name}</Typography>
    <Typography>Amonut: {food?.details ? food?.details.amount : ""}</Typography>
    <Typography>Unit: {food?.details ? food?.details.unit : ""}</Typography>
    <Button sx={{color: 'white'}} onClick={()=>{router.push('/')}}>Back to foods</Button>
    </Box>
  );
}

export default FoodDetails;
