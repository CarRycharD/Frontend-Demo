import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FoodEntry } from "../utils/Interfacecs";

const box = {
  position: 'absolute',
  left: '50%',
  top: '25%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  border: 1,
  borderRadius: 5,
  borderColor: 'success.main',
  bgcolor: 'success.light',
  minWidth: 1/4,
  minHeight: 100
}
const Details = () => {

  const router = useRouter();
  const [food, setFood] = useState<FoodEntry>();

  useEffect(() =>{
    if(localStorage.getItem('jwtToken') === null){
        router.push('/login')
    }

    axios.get(`http://localhost:9090/api/v1/food${window.location.pathname}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(response => {setFood(response.data.food)}).catch(err => router.push('/404'))
  },[])

  return(
    <Box sx={box}>
        <Typography>Details</Typography>
        <Typography>Name: {food?.name}</Typography>
        <Typography>Amonut: {food?.details ? food?.details.amount : ""}</Typography>
        <Typography>Unit: {food?.details ? food?.details.unit : ""}</Typography>
        <Button sx={{color: 'white'}} onClick={()=>{router.push('/')}}>Back to foods</Button>
    </Box>
)

}

export default Details;
