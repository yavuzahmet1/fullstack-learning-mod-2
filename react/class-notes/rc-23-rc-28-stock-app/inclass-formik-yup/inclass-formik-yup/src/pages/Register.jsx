import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from 'formik';
import * as Yup from 'yup';
import RegisterForm from "../components/RegisterForm";

const Register = () => {

  const SignupSchema = Yup.object().shape({

    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    lastName: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      )

    //       Breaking down the regex:
    // (?=.{8,}): Set the minimum number of characters
    // ((?=.[!@#$%^&()-=+{};:,<.>]){1}): Verify if there is at least 1 character of the list "!@#$%^&*()-=+{};:,<.>"
    // (?=.*\d): Verify if there is a digit
    // ((?=.*[a-z]){1}): Verify if there is a lower case alphabetical character
    // ((?=.*[A-Z]){1}): Verify if there is an upper case alphabetical character

  });

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
            validationSchema={SignupSchema}
            onSubmit={(value) => {
              console.log(value)
            }}

            // !FormRegister.jsx componentine gönderdi
            component={(props) => (<RegisterForm {...props} />)}

          />



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
