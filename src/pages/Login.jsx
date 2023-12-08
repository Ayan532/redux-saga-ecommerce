import {useState} from 'react';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';
import { loginUser } from './../services/auth.service';
import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../redux-saga/redux/slices/authSlice';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin =async ()=>{
    
      try {
        dispatch(loginStart());
        const token = await loginUser(username, password);
        dispatch(loginSuccess(token));
     
      localStorage.setItem('user', JSON.stringify(token));
      localStorage.setItem('isLoggedIn', 'true');
      // router.replace('/');
      navigate('/');
      console.log("login successfull")
      alert("login suceess!")
  
      } catch (error) {
        dispatch(loginFailure(error.message || 'Login failed'));
        console.log('📢[Login.jsx:80]: error: ', error);
        
      }
    };
  
  return (
    <Grid container spacing={0} justify="center" alignItems="center" direction="column">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
      <Grid item>
        <Paper style={{ height: '50vh', width: '40vh', marginTop: '10vh',background:"#d6d6d6" }}>
          <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '70vh'}}>
            <div />
            <div style={{ display:"flex",flexDirection:"column"}}>
              <TextField label="Username" margin="normal" 
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{ style: { backgroundColor: 'white' } }}
              />
              <TextField label="Password" margin="normal" type="password" value={password}
              onChange={(e)=> setPassword(e.target.value)}
              InputProps={{ style: { backgroundColor: 'white' } }}
              />
            </div>
            <div>
              <Button variant="contained" color="primary" style={{ marginTop: '50px' }} onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}