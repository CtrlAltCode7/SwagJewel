import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Button, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  banner: {
    marginBottom: 4,
  },
  itemBanner: {
    backgroundColor: '#f0f0f0',
    padding: 2,
    borderRadius: 1,
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: 1,
  },
  description: {
    marginBottom: 2,
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <Grid item lg={6} md={6} sm={12} className={classes.banner}>
      <div className={classes.itemBanner}>
        <div className="inner">
          <div className="banner-content">
            <Typography variant="h6" className="ysera-subtitle">TOP STAFF PICK</Typography>
            <Typography variant="h4" className={classes.title}>Shop Rings</Typography>
            <Typography variant="body1" className={classes.description}>
              Proin interdum magna primis id consequat dictum
            </Typography>
            <Button variant="contained" color="primary" className="button btn-shop-now">Shop now</Button>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Banner;
