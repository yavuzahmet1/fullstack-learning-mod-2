import React from 'react'
import { Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
}) => {
    return (
        <form onSubmit={handleSubmit}>

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
            <Button
                fullWidth
                type="submit"
                variant="contained">SUBMIT</Button>
        </form>
    )
}

export default RegisterForm