import { Box, Link, Typography } from "@mui/material";
import { notFoundStyle } from "../styles/styles";

const notFound = () => {
  return (
    <Box sx={notFoundStyle}>
      <Typography variant="h1">Oooops...</Typography>
      <Typography variant="h3">That page cannot be found.</Typography>
      <Typography variant="h5">Go back to the <Link href="/">Homepage</Link></Typography>
    </Box>
   );
}

export default notFound;
