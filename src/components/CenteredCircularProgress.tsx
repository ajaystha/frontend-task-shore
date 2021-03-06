import { Box, CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';

const CenteredCircularProgress: FC = () => {
  return (
    <Box
      m="auto"
      display="flex"
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
};

export { CenteredCircularProgress };
