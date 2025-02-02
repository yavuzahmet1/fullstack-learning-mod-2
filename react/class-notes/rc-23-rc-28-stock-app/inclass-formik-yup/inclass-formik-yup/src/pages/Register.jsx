import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          {/* //!Formik structure */}
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: ""

            }}
            validate={{}}
            onSubmit={{}}
          >
            {
              (
                {

                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }
              ) => (
                <form action="" >

                  <TextField
                    name="username"
                    label="User Name"
                    variant="outlined"
                    value={values.username}
                    fullWidth
                    onChange={handleChange}
                    error={touched.username && errors.username}
                    helperText={touched.username && errors.username}
                    onBlur={handleBlur}//kullanıcın input alanından ayrıldığını yakalayan
                    margin="normal"
                  />

                  <TextField
                    name="firstName"
                    label="First Name"
                    variant="outlined"
                    value={values.firstName}
                    fullWidth
                    onChange={handleChange}
                    error={touched.firstName && errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    onBlur={handleBlur}//kullanıcın input alanından ayrıldığını yakalayan
                    margin="normal"
                  />
                  <TextField
                    name="lastName"
                    label="Last Name"
                    variant="outlined"
                    value={values.lastName}
                    fullWidth
                    onChange={handleChange}
                    error={touched.lastName && errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    onBlur={handleBlur}//kullanıcın input alanından ayrıldığını yakalayan
                    margin="normal"
                  />
                  <TextField
                    name="email"
                    label="e-mail"
                    variant="outlined"
                    value={values.email}
                    fullWidth
                    onChange={handleChange}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    onBlur={handleBlur}//kullanıcın input alanından ayrıldığını yakalayan
                    margin="normal"
                    type="email"
                  />
                  <TextField
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={values.password}
                    fullWidth
                    onChange={handleChange}
                    error={touched.password && errors.password}
                    helperText={touched.password && errors.password}
                    onBlur={handleBlur}//kullanıcın input alanından ayrıldığını yakalayan
                    margin="normal"
                    type="password"
                  />
                </form>
              )
            }
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
