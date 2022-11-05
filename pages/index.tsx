import { Box, List, Button, Typography } from "@mui/material";
import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FoodCreate from "../components/FoodCreate";
import FoodDelete from "../components/FoodDelete";
import FoodUpdate from "../components/FoodUpdate";
import Logout from "../components/Logout";

const outerBox = {
  position: 'absolute',
  left: '50%',
  top: '25%',
  transform: 'translate(-50%, -50%)'
};

const foodButton = {
  color: 'warning.main',
  border: 1,
  borderRadius: 5,
  borderColor: 'warning.main',
  mx: 'auto',
  width: 200,
  textAlign: 'center',
  ':hover' : {bgcolor: 'warning.main',
  color: 'white',}
};

const Home: NextPage = () => {

  const router = useRouter()
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    axios
    .get('http://localhost:9090/api/v1/food/', {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(response => { setFoods(response.data.foods);})
    .catch(() => router.push('/login'))}, [foods]);

  return (
    <><Logout/>
    <Box sx={outerBox}>
      <FoodCreate />
      <List>
        {foods.length ? foods.map((food) => (
          <Box key={food._id} display="flex" alignItems="center">
            <Link href={"/" + food._id}><Button sx={foodButton}>{food.name}</Button></Link>
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

};

export default Home;
