import { Box, Button, Dialog, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FoodDelete = ({foodId, foodName}: {foodId: string, foodName: string}) => {
  const [open, setOpen] = useState(false);

  const deleteFood = () => {
    axios
    .delete(`http://localhost:9090/api/v1/food/${foodId}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}}).then((res) => console.log(res)).catch((e) => (console.log(e)))
  }

  const redStyle = {
    marginBottom: 1,
    mx: 1,
    bgcolor: 'error.main',
    borderRadius: 5,
    color: 'white',
    ':hover': {bgcolor: 'white',
              color: 'error.main',}
            }

  const greenStyle = {
    marginBottom: 1,
    bgcolor: 'success.light',
    borderRadius: 5,
    color: 'white',
    ':hover': {bgcolor: 'white',
              color: 'success.light',}
            }
  return (
    <Box>
      <Button sx={redStyle} onClick={() => setOpen(true)}>Delete</Button>
      <Dialog fullWidth maxWidth={'sm'}  open={open} onClose={() => setOpen(false)}>
        <Box sx={{textAlign: 'center'}}>
          <Typography sx={{my: 1}}>Are you sure you want to delete {foodName}?</Typography>
          <Button onClick={deleteFood} sx={redStyle}>Yes</Button>
          <Button sx={greenStyle}>No</Button>
        </Box>
      </Dialog>
    </Box>
   );
}

export default FoodDelete;
