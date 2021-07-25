import React, { FC } from 'react';
import { Theme, makeStyles, Box } from '@material-ui/core';

import { UsersListItem } from '../Users/UsersListItem';
import { CenteredCircularProgress } from '../CenteredCircularProgress';

import { User } from '../../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: '1px solid #E7E3E3',
  },
}));

type UsersListProps = {
  users: User[] | undefined;
  isLoading: boolean;
  onOpenEditDialog: (id: number) => void;
};

const UsersList: FC<UsersListProps> = (props: UsersListProps) => {
  const { users, isLoading, onOpenEditDialog } = props;

  const classes = useStyles();

  const isEmptyContent = !isLoading && !users?.length;

  return (
    <Box className={classes.box}>
      {!users && isLoading && <CenteredCircularProgress />}

      {isEmptyContent ? (
        <Box py={2} px={1.5}>
          Nothing found
        </Box>
      ) : (
        users?.map((user, idx) => (
          <UsersListItem key={user.id} {...user} onClick={onOpenEditDialog} />
        ))
      )}
    </Box>
  );
};

export { UsersList };
