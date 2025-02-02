import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const LoginForm = (
    {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    }
) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="email"
                label="e-mail"
                variant="outlined"
                value={values.email}
                fullWidth
                onChange={handleChange}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                margin="normal"
                type="password"
            />
            <Button fullWidth
                type="submit"
                variant="contained">Sign In</Button>
        </form>
    )
}

export default LoginForm