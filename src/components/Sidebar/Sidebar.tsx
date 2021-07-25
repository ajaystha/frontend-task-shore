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
      height: 70,
    },
    logo: {
      width: 130,
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
          justifyContent="center"
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
