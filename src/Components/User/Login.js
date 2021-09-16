import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import image from "../../Images/signin.jpg"
import { Box } from '@material-ui/core';
import Copyright from '../Copyright';
import { useDispatch, useSelector } from 'react-redux';
import {Login} from '../../Redux/Actions/Auth/actions';
import { Redirect, withRouter } from 'react-router';


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  
 function Signin() {

    const dispatch = useDispatch();

    const Submit = () => {
            dispatch(Login(email, password));
    }

    const[email, setEmail] = useState("");
    
    const[password, setPassword] = useState("");

    function handleChangeEmail(e){
        setEmail(e.target.value)
      }

      function handleChangePassword(e){
        setPassword(e.target.value)
      }

    const classes = useStyles();

    const selector = useSelector(state=>state.AuthReducer.auth.token)
  
    return (
        <>
        {selector !== ""?
        <>
        <Redirect to="/dashboard"/>
        </>
        :
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
              تسحيل الدخول
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="البريد الالكتروني"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChangeEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة المرور"
                type="password"
                id="password"
                auctoComplete="current-password"
                onChange={handleChangePassword}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={Submit}
              >
                تسجيل الدخول
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2">
                    {"ليس لديك حساب؟ اشترك الان"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
            </Box>
            </form>
          </div>
        
        </Grid>
      </Grid>
      }
      </>
    );
  }

  export default withRouter(Signin)