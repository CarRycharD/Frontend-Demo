import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FoodDetails from "../../components/FoodDetails";
import { PORT } from "../../utils/config";
import { FoodEntry } from "../../utils/Interfaces";

const Details = () => {

  const router = useRouter();

  const [food, setFood] = useState<FoodEntry>();

  useEffect(() =>{
    if(localStorage.getItem('jwtToken') === null){
        router.push('/login')
    }
    console.log(window.location.pathname)
    axios.get(`http://localhost:${PORT}/api/v1${window.location.pathname}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(response => {setFood(response.data.food)})
    .catch(() => router.push('/404'))
  },[])


  return(
    <FoodDetails
      food={food} name={""} amount={0} unit={""}    />
)

}

export default Details;
