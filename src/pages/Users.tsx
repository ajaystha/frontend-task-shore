import React, { FC, ChangeEvent, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Theme, makeStyles, Container } from '@material-ui/core';

import { UsersToolbar } from '../components/Users/UsersToolbar';
import { UsersList } from '../components/Users/UsersList';

import { User } from '../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 3),
    height: 'calc(100% - 70px)',
  },
  box: {
    padding: theme.spacing(2),
    border: '1px solid #E7E3E3',
  },
}));

const USERS_ENDPOINT = 'https://reqres.in/api/users';

const Users: FC = () => {
  const classes = useStyles();

  const [searchText, setSearchText] = useState<string>('');

  const { data, isValidating } = useSWR(USERS_ENDPOINT, loadUsers);
  const users: User[] | undefined = data;

  async function loadUsers(): Promise<User[]> {
    try {
      const { data } = await axios.get<{ data: User[] }>(USERS_ENDPOINT);

      return data.data;
    } catch (e) {
      const errorMessage = e.response?.data?.error?.message || e.message;

      throw new Error(errorMessage);
    }
  }

  // const updateUsers = async () => {};

  const openEditDialog = () => {
    console.log('opening');
  };

  const filteredUsers = (): User[] | undefined => {
    if (!searchText) return users;

    const searchTextLowerCase = searchText.toLowerCase();

    return users?.filter(
      (usr) =>
        usr.first_name.toLowerCase().includes(searchTextLowerCase) ||
        usr.last_name.toLowerCase().includes(searchTextLowerCase)
    );
  };

  const updateSearchText = (ev: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(ev.target.value);
  };

  const clearSearch = (): void => {
    setSearchText('');
  };

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <UsersToolbar
          searchText={searchText}
          onSearchText={updateSearchText}
          onClearInput={clearSearch}
        />

        <UsersList
          users={filteredUsers()}
          isLoading={isValidating}
          onOpenEditDialog={openEditDialog}
        />
      </Container>
    </>
  );
};

export { Users };
