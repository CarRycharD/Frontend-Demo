import { useFormik } from "formik";
import { TextField, Button, AlertTitle, Alert } from "@mui/material";
import * as Yup from "yup";
import axios from 'axios';
import { useRouter } from "next/router";
import { useState } from "react";

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
            console.log(localStorage.getItem('jwtToken'));
            router.push('/');
        }).catch(err => setAlertActive(true))

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
    <div>
      <form onSubmit={formik.handleSubmit}>
      {alertActive ?
      <Alert onClose={() => setAlertActive(false)} variant="filled" severity="error">
      <AlertTitle>Login Error</AlertTitle>
      Invalid username or password
      </Alert> :
      <div></div>
      }
        <div className="form">
          <TextField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          margin="normal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          ></TextField>
        </div>
        <div>
          <TextField
          id="password"
          name="password"
          type="password"
          placeholder="*********"
          margin="normal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          ></TextField>
          <Button variant="outlined" type="submit">Submit</Button>
        </div>

      </form>
    </div>
   );
  }

