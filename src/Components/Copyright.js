import { Typography } from '@material-ui/core';
import React from 'react'
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'جميع الحقوق محفوظة © '}
        <Link color="inherit" href="/">
          نطام شحن
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default Copyright
