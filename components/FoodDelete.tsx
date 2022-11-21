import { Box, Button, Dialog, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { foodDeleteStyles } from "../styles/styles";
import { PORT } from "../utils/config";
import { refresh } from "../utils/Refresh";

const FoodDelete = ({foodId, foodName}: {foodId: string, foodName: string}) => {
  const [open, setOpen] = useState(false);

  const deleteFood = () => {
    axios
    .delete(`http://localhost:${PORT}/api/v1/food/${foodId}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}}).then(refresh).catch((e) => (console.log(e)))
  }

  return (
    <Box>
      <Button sx={foodDeleteStyles.redStyle} onClick={() => setOpen(true)}>Delete</Button>
      <Dialog fullWidth maxWidth={'sm'}  open={open} onClose={() => setOpen(false)}>
        <Box sx={{textAlign: 'center'}}>
          <Typography sx={{my: 1}}>Are you sure you want to delete {foodName}?</Typography>
          <Button onClick={deleteFood} sx={foodDeleteStyles.redModalStyle}>Yes</Button>
          <Button sx={foodDeleteStyles.greenStyle} onClick={() => setOpen(false)}>No</Button>
        </Box>
      </Dialog>
    </Box>
   );
}

export default FoodDelete;
