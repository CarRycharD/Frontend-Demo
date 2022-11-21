import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FoodList from "../components/FoodList";
import { PORT } from "../utils/config";
import { FoodEntry } from "../utils/Interfaces";


const Home: NextPage = () => {

  const router = useRouter()
  const [foods, setFoods] = useState<FoodEntry[]>([]);

  useEffect(() => {

    const token = localStorage.getItem('jwtToken');

    axios
    .get(`http://localhost:${PORT}/api/v1/food/`, {headers: {"Authorization": `Bearer ${token}`}})
    .then(response => { setFoods(response.data.foods) })
    .catch(() => router.push('/login'))}, []);

  return (
    <>
    <FoodList foods = { foods }/>
    </>
  );

};

export default Home;
