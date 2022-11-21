import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from "yup";
import { Alert, AlertTitle } from '@mui/material';
import { loginFormStyles } from '../styles/styles';
import { PORT } from '../utils/config';

const theme = createTheme();

export default function SignIn() {
  const router = useRouter()

  const [alertActive, setAlertActive] = React.useState(false);

  const login = (loginCredentials: {
    email: string,
    password: string
  }) => {
    console.log("Logging in");
    axios.post(`http://localhost:${PORT}/login`, {username: loginCredentials.email, password: loginCredentials.password})
        .then(response => {
          localStorage.setItem('jwtToken', response.data.token);
          console.log(response);
          router.push('/');
        }).catch(() => setAlertActive(true))

  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      login(values)
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={loginFormStyles.box}
        >
          <Avatar sx={loginFormStyles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={loginFormStyles.button}
            >
              Sign In
            </Button>
          </Box>
          {alertActive ?
          <Alert sx={{my: 5}} onClose={() => setAlertActive(false)} variant="filled" severity="error">
          <AlertTitle>Login Error</AlertTitle>
          Invalid username or password
          </Alert> :
          <Box></Box>}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
