import React, { FC } from 'react';
import { createStyles, makeStyles, Grid, Box, Divider } from '@material-ui/core';

import { Logo } from '../Icons/Logo';
import { SidebarMenu } from './SidebarMenu';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: '#192842',
      color: '#FFFFFF',
      padding: 0,
      height: '100vh',
    },
    logoContainer: {
      height: 90,
    },
    logo: {
      width: 150,
      height: 'auto',
    },
    divider: {
      backgroundColor: '#151D33',
      height: 2,
    },
  })
);

const Sidebar: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box maxWidth="sm" className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          item
          xs={12}
          className={classes.logoContainer}
        >
          <Logo className={classes.logo} />
        </Grid>

        <Divider className={classes.divider} />

        <SidebarMenu />
      </Box>
    </>
  );
};

export { Sidebar };
