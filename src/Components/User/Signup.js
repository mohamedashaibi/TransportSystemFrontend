import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import Copyright from '../Copyright';

const useStyles = makeStyles((theme) => ({
    textFields: {
        textAlign: "center",
    },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
    textAlign: "center"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" dir="rtl">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          تسجيل مستخدم جديد
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.textFields}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="الاسم الاول"
                autoFocus
                dir="rtl"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              className={classes.textFields}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="اللقب"
                name="lastName"
                autoComplete="lname"
                dir="rtl"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              className={classes.textFields}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="البريد الالكتروني"
                name="email"
                autoComplete="email"
                dir="rtl"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              className={classes.textFields}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="كلمة المرور"
                type="password"
                id="password"
                autoComplete="current-password"
                dir="rtl"

              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            التسجيل
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/sign-in" variant="body2">
                لديك حساب؟ سجل الدخول الان
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
                <Copyright />
        </Box>
        </form>
      </div>
    </Container>
  );
}