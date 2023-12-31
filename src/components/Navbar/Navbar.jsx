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
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux-saga/redux/slices/dataSlice';
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';

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

export default function Navbar() {
    const [search,setSearch]=React.useState('')
    const dispatch=useDispatch()
    const isLoggedIn = !!localStorage.getItem('user');
    const navigate=useNavigate();

    const handleLogout=()=>{
      localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    alert('Logout successful!');
    window.location.reload();
    }
    const handleLogin = ()=>{
      navigate('/login')
    }

    React.useEffect(()=>{
        dispatch(fetchData(search))
    },[dispatch,search])

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
      
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
            MUI
          </Typography>
          {isLoggedIn ? (
          <Button color="inherit"  onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" 
                  color="primary" 
                  style={{ 
                    '&:hover': {
                      backgroundColor: '#007BFF',
                      borderColor: '#0062cc',
                    },
                  }}  onClick={handleLogin}>
            Login
          </Button>
        )}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}