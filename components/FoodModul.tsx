import { Box, Button, Dialog, SxProps, TextField, Theme, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { foodModulStyles } from "../styles/styles";

const FoodModul = ({formik, button}: {formik: any, button: string}) => {
  const [open, setOpen] = useState(false);

  const [buttonType, setButtonType] = useState<SxProps<Theme>>()

  useEffect(() => {
    button === 'Update' ? setButtonType(foodModulStyles.updateButton) : setButtonType(foodModulStyles.createButton)
  })

  return (
  <Box sx={ {textAlign: 'center'} }>
    <Button sx={buttonType} onClick={() => setOpen(true)}>{button}</Button>
    <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
      <form onSubmit={formik.handleSubmit}>
        <Typography>Name</Typography>
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
        />
        <Typography>Amount</Typography>
        <TextField
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
        <Typography>Unit</Typography>
        <TextField
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
          <Button sx={foodModulStyles.createButton} type="submit" onClick={() => setOpen(false)}>{button}</Button>
        </Box>
      </form>
    </Dialog>
  </Box>
  );
}

export default FoodModul;
