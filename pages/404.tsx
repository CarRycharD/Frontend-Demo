import { Box, Link, Typography } from "@mui/material";

const notFound = () => {
  return (
    <Box sx={{bgcolor: 'warning.main',
    position: 'absolute',
    left: '50%',
    top: '25%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',border: 1,
    borderRadius: 5,
    borderColor: 'warning.main'}}>
      <Typography variant="h1">Oooops...</Typography>
      <Typography variant="h3">That page cannot be found.</Typography>
      <Typography variant="h5">Go back to the <Link href="/"><a>Homepage</a></Link></Typography>
    </Box>
   );
}

export default notFound;
