import { Box, Button, Dialog, TextField } from "@mui/material";
import { useState } from "react";

const FoodModul = ({formik, button}: {formik: any, button: string}) => {
  const [open, setOpen] = useState(false);
  const buttonType = () => {
    if (button === 'Update') {
      return { bgcolor: 'warning.main',
      mx: 1,
      borderRadius: 5,
      color: 'white',
      ':hover': {bgcolor: 'white',
                 color: 'warning.main'
                }
      }
      }
      return { bgcolor: 'success.light',
      borderRadius: 5,
      color: 'white',
      ':hover': {bgcolor: 'white',
                 color: 'success.light',
                }
      };

  }
  return ( <Box textAlign='center'>
  <Button sx={buttonType} onClick={() => setOpen(true)}>{button}</Button>
  <Dialog fullWidth maxWidth={'sm'}  open={open} onClose={() => setOpen(false)}>
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
  />
  <Button type="submit">Submit</Button>
  </form>
  </Dialog>
</Box> );
}

export default FoodModul;
