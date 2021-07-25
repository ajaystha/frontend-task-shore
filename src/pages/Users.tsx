import React, { FC, ChangeEvent, useState } from 'react';
import { Theme, makeStyles, Box } from '@material-ui/core';

import { UsersToolbar } from '../components/Users/UsersToolbar';

// import SearchIcon from '../components/Icons/Search';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 3),
    height: 'calc(100% - 70px)',
  },
}));

const Users: FC = () => {
  const classes = useStyles();

  const [searchText, setSearchText] = useState<string | null>(null);

  // const loadUsers = async () => {};

  // const updateUsers = async () => {};

  const searchUsers = (ev: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(ev.target.value);
  };

  const clearSearch = (): void => {
    setSearchText('');
  };

  return (
    <Box className={classes.container}>
      <UsersToolbar searchText={searchText} onSearchText={searchUsers} onClearInput={clearSearch} />

      <div>Users list</div>
    </Box>
  );
};

export { Users };
