import { Box, Button, List, ListItem, Modal, Typography, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { json } from "stream/consumers";
import FoodCreate from "./foodcreate";
import Navbar from "./navbar";




const Food = () => {
  const router = useRouter()
  const [foods, setFoods] = useState<any[]>([]);

  useEffect(() => {
    axios
    .get('http://localhost:9090/api/v1/food/', {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
    .then(response => { setFoods(response.data.foods);}).catch(err => router.push('/login'))}, []);


    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    const [tfValue, setTFValue] = useState("My Text")

    const createNewFood = () => {

      const formData = ({name: tfValue})
      console.log(tfValue)

      axios
      .post('http://localhost:9090/api/v1/food/', formData, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}})
      .then((response) => console.log(response))
      .catch((error) => console.log(error) )


  }

      const [openUpdate, setOpenUpdate] = useState(false);
      const handleUpdateOpen = () => setOpenUpdate(true);
      const handleUpdateClose = () => setOpenUpdate(false);
      const [openDelete, setOpenDelete] = useState(false);
      const handleDeleteOpen = () => setOpenDelete(true);
      const handleDeleteClose = () => setOpenDelete(false);
      const [openAddFood, setAddFood] = useState(false);
      const handleAddFoodOpen = () => setAddFood(true);
      const handleAddFoodClose = () => setAddFood(false);

    const deleteFood = (id: string) => {
      axios
      .delete(`http://localhost:9090/api/v1/food/${id}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}}).then(handleDeleteClose)
    }

  return (
  <><Navbar />
  <FoodCreate />
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
    <List>
      {foods.length ? foods.map((food, index) => (
        <ListItem key={index}>
          <Typography>{food.name}</Typography>
        <Box>
          <Button onClick={handleUpdateOpen}>Update</Button>
          <Modal
            open={openUpdate}
            onClose={handleUpdateClose}>
            <Box sx={style}>
              <Typography variant="h6" component="h2">
                {food.name}
              </Typography>
              <Box sx={style}>
              <Typography>
                Name
              </Typography>
              <TextField defaultValue={food.name} />
              <Typography>
                Details
              </Typography>
              <Typography>
                Unit
              </Typography>
              <TextField defaultValue={food.details ? food.details.unit : ''} />
              <Typography>
                Amount
              </Typography>
              <TextField defaultValue={food.details ? food.details.amount : ''}/>
              </Box>
            </Box>
          </Modal>
          <Button onClick={handleDeleteOpen}>Delete</Button>
          <Modal
            open={openDelete}
            onClose={handleDeleteClose}>
            <Box sx={style}>
              <Typography variant="h6" component="h2">
                Are you sure you want to delete {food.name}?
              </Typography>
              <Button onClick={() => {deleteFood(food._id)}}>Yes</Button>
              <Button onClick={handleDeleteClose}>No</Button>
            </Box>
          </Modal>
        </Box>

        </ListItem>
      )) : "There is no food"}
    </List>

  </Box></> );
}

export default Food;
