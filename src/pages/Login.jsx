import React from 'react';
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar } from '@mui/material';
// import verifyPass from auth service

export default function Login() {


  const handleLogin = ()=>{
    // if login successfull
    // const verifyPass = async () => {
    //   try {
        // const response = await Password validate
      
        // localStorage.setItem('user', JSON.stringify(response));
        // localStorage.setItem('isLoggedIn', 'true');
  
      //   router.replace('/');
      // } catch (error) {
      //   console.log('📢[Login.jsx:80]: error: ', error);
        
      // }
    };
  
  return (
    <Grid container spacing={0} justify="center" direction="column">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
      <Grid item>
        <Paper style={{ height: '70vh', width: '30vh', marginTop: '10vh' }}>
          <Grid container direction="column" alignItems="center" justify="center" style={{ minHeight: '70vh' }}>
            <div />
            <div>
              <TextField label="Username" margin="normal" />
              <TextField label="Password" margin="normal" type="password" />
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