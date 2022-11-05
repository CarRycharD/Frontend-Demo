import { Box, Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";

const updateButton = {
  bgcolor: 'warning.main',
  mx: 1,
  borderRadius: 5,
  color: 'white',
  ':hover': {bgcolor: 'white',
            color: 'warning.main'
            }
}

export const createButton = {
  bgcolor: 'success.light',
  borderRadius: 5,
  color: 'white',
  ':hover': {bgcolor: 'white',
            color: 'success.light',
            }
}

const FoodModul = ({formik, button}: {formik: any, button: string}) => {
  const [open, setOpen] = useState(false);
  const buttonType = () => {
    if (button === 'Update') {
      return updateButton
      }
      return createButton;

  }
  return ( <Box textAlign='center'>
  <Button sx={buttonType} onClick={() => setOpen(true)}>{button}</Button>
  <Dialog fullWidth maxWidth={'sm'} open={open} onClose={() => setOpen(false)}>
  <form onSubmit={formik.handleSubmit}>
  <TextField
  name="name"
  size="medium"
  type="text"
  variant="outlined"
  placeholder="Name"
  margin="dense"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.name}
  error={formik.touched.name && Boolean(formik.errors.name)}
  helperText={formik.touched.name && formik.errors.name}
  /><TextField
  name="amount"
  size="medium"
  type="number"
  variant="outlined"
  placeholder="Amount"
  margin="dense"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.amount}
  error={formik.touched.amount && Boolean(formik.errors.amount)}
  helperText={formik.touched.amount && formik.errors.amount}
  /><TextField
  name="unit"
  size="medium"
  type="text"
  variant="outlined"
  placeholder="Unit"
  margin="dense"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.unit}
  error={formik.touched.unit && Boolean(formik.errors.unit)}
  helperText={formik.touched.unit && formik.errors.unit}
  />
  <Box mb={1}>
  <Button sx={createButton} type="submit" onClick={() => setOpen(false)}>Update</Button>
  </Box>
  </form>
  </Dialog>
</Box> );
}

export default FoodModul;
