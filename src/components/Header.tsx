import React, { FC } from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';

import MenuIcon from './Icons/Menu';
import LockIcon from './Icons/Lock';
import TriangleDownIcon from './Icons/TriangleDown';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff',
    height: 70,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    color: '#4D5664',
    fontWeight: 700,
  },
  userContainer: {
    '& .MuiGrid-item + .MuiGrid-item': {
      marginLeft: 10,
    },
  },
  avatarWrapper: {
    backgroundColor: '#A9679A',
    borderRadius: '50%',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#A9679A',
  },
}));

export const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appbar} elevation={1}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h5" className={classes.title}>
          Users
        </Typography>

        <div className={classes.userContainer}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item className={classes.avatarWrapper}>
              <LockIcon />
            </Grid>

            <Grid item className={classes.name}>
              Patricia Kasse
            </Grid>

            <Grid item>
              <TriangleDownIcon />
            </Grid>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  );
};
