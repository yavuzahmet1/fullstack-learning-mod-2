// import useState from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];


export default function TextFields() {
    const [error, setError] = useState(false)
    return (
        <div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                onClick={() => setError(true)}
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />

                <TextField
                    id='outlined-basic'
                    label="required"
                    variant='outlined'
                    defaultValue="email enter"
                    margin='dense'
                />
                <TextField
                    id='outlined-helper-text'
                    label="required"
                    variant='outlined'
                    defaultValue="email enter"
                    margin='dense'
                />
                <TextField
                    error
                    id="standard-error-helper-text"
                    label="Error"
                    error={error}
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="standard"
                    fullWidth
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        With a start adornment
                    </InputLabel>
                    <Input
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Box>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Password
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={error ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password"
                                    onClick={() => setError(!error)}
                                    edge="end"
                                >
                                    {error ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Box>
        </div >
    );
}
