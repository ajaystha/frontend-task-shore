import React, { FC, ChangeEvent, useState } from 'react';
import axios from 'axios';
import useSWR, { mutate } from 'swr';
import {
  Theme,
  makeStyles,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@material-ui/core';

import { UsersToolbar } from '../components/Users/UsersToolbar';
import { UsersList } from '../components/Users/UsersList';
import { UserForm } from '../components/Users/UserForm';
import CloseIcon from '../components/Icons/Close';

import { User, UserFormData } from '../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 3),
    height: 'calc(100% - 70px)',
  },
  box: {
    padding: theme.spacing(2),
    border: '1px solid #E7E3E3',
  },
  dialogCloseButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    width: 40,
    height: 40,
  },
}));

const USERS_ENDPOINT = 'https://reqres.in/api/users';

const Users: FC = () => {
  const classes = useStyles();

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  const { data, isValidating } = useSWR(USERS_ENDPOINT, loadUsers);
  const users: User[] | undefined = data;

  async function loadUsers(): Promise<User[]> {
    try {
      const { data } = await axios.get<{ data: User[] }>(USERS_ENDPOINT);

      return data.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  const updateUsers = async (id: number | undefined, formData: UserFormData) => {
    if (!id) return;

    try {
      await axios.put(`${USERS_ENDPOINT}/${id}`, formData);

      mutate(USERS_ENDPOINT);
      setSelectedUser(null);
    } catch (err) {
      throw new Error(err);
    }
  };

  const openEditDialog = (userId: number): void => {
    const selected = users?.find((usr) => usr.id === userId) || null;

    setSelectedUser(selected);
  };

  const closeEditDialog = () => {
    setSelectedUser(null);
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
      <Dialog open={!!selectedUser} onClose={closeEditDialog} aria-labelledby="user-edit-dialog">
        <DialogTitle id="user-edit-dialog-title" style={{ borderBottom: '1px solid #ccc' }}>
          <Typography>
            {`Edit contact "${selectedUser?.first_name} ${selectedUser?.last_name} "`}
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.dialogCloseButton}
            onClick={closeEditDialog}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <UserForm user={selectedUser} onUpdate={updateUsers} onCancel={closeEditDialog} />
        </DialogContent>
      </Dialog>

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
