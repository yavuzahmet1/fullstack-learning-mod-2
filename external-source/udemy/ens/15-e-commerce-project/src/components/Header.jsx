import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { useState } from 'react';
import logo from "../images/logo.png"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header = () => {
    const [theme, setTheme] = useState(false)
    const [color, setColor] = useState([])

    const changeTheme = () => {
        if (theme) {
            setColor(["black", "white"])
        } else {
            setColor(["white", "black"])
        }
        setTheme(!theme)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: `${color[0]}`, color: `${color[1]}` }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <Box
                                component="img"
                                src={logo}
                                alt="Test Image"
                                sx={{ width: 60, height: 60, borderRadius: 2 }}
                            />
                            <h4>yavuz e-commerce</h4>
                        </div>
                    </Typography>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <AddShoppingCartOutlinedIcon fontSize='large' />
                        {
                            theme ? (<BedtimeOutlinedIcon fontSize='large' style={{ cursor: "pointer" }} onClick={changeTheme} />) : (<WbSunnyOutlinedIcon fontSize='large' style={{ cursor: "pointer" }} onClick={changeTheme} />)
                        }


                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header