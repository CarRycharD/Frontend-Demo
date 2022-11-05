import { useFormik } from "formik";
import { TextField, Button, AlertTitle, Alert, Box } from "@mui/material";
import * as Yup from "yup";
import axios from 'axios';
import { useRouter } from "next/router";
import { useState } from "react";
import { createButton } from "./FoodModul";

const loginButton = createButton

export default function LoginForm() {

  const router = useRouter()

  const [alertActive, setAlertActive] = useState(false);

  const login = (loginCredentials: {
    email: string,
    password: string
  }) => {
    console.log("Logging in");
    axios.post('http://localhost:9090/login', {username: loginCredentials.email, password: loginCredentials.password})
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
    <Box sx={{position: 'absolute',
              left: '50%',
              top: '35%',
              transform: 'translate(-50%, -50%)'}}>
      <form onSubmit={formik.handleSubmit}>
      {alertActive ?
      <Alert sx={{my: 5}} onClose={() => setAlertActive(false)} variant="filled" severity="error">
      <AlertTitle>Login Error</AlertTitle>
      Invalid username or password
      </Alert> :
      <Box></Box>
      }
        <Box mx={2} mb={2}>
          <TextField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          ></TextField>
        </Box>
        <Box mx={2} mb={2}>
          <TextField
          id="password"
          name="password"
          type="password"
          placeholder="*********"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          ></TextField>

        </Box>
        <Box mx={2}><Button sx={{bgcolor: 'success.light',borderRadius: 5,color: 'white',':hover': {bgcolor: 'white',color: 'success.light',}}} type="submit">Submit</Button></Box>
      </form>
    </Box>
   );
  }

