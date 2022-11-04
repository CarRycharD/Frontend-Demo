import { Box, Button, Dialog, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const FoodDelete = ({foodId}: {foodId: string}) => {
  const [open, setOpen] = useState(false);

  const deleteFood = () => {
    axios
    .delete(`http://localhost:9090/api/v1/food/${foodId}`, {headers: {"Authorization": `Bearer ${localStorage.getItem('jwtToken')}`}}).then((res) => console.log(res)).catch((e) => (console.log(e)))
  }

  const style = { bgcolor: 'error.main',
                  borderRadius: 5,
                  color: 'white',
                  ':hover': {bgcolor: 'white',
                            color: 'error.main',
                            }}

  return (
    <Box>
      <Button sx={style} onClick={() => setOpen(true)}>Delete</Button>
      <Dialog fullWidth maxWidth={'sm'}  open={open} onClose={() => setOpen(false)}>
        <Box>
          <Typography>Are you sure you want to delete this item?</Typography>
          <Button onClick={deleteFood}>Yes</Button>
          <Button>No</Button>
        </Box>
      </Dialog>
    </Box>
   );
}

export default FoodDelete;
