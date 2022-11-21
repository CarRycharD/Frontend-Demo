import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';



const Navbar = () => {

  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("jwtToken")
    router.push('/login')

  };

  return (
    <Box
    m={1}
    display="flex"
    justifyContent="flex-end"
    alignItems="flex-end"
    >
    <Button type="submit" variant="contained" color='error' sx={{Height: 40}} onClick={logout}>Logout
    </Button>
    </Box>

  );
}

export default Navbar;
