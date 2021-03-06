import React, { FC } from 'react';
import {
  Theme,
  makeStyles,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
} from '@material-ui/core';

import { User } from '../../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    border: '1px solid #E7E3E3',
    borderBottom: 'none',
    color: '#403B5A',
    cursor: 'pointer',

    '&.MuiGrid-container:last-child': {
      borderBottom: '1px solid #E7E3E3',
    },
  },
  gridItem: {
    borderRight: '1px solid #E7E3E3',
    verticalAlign: 'middle',
  },
  gridItemCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: theme.typography.fontWeightMedium,
  },
  text: {
    fontWeight: theme.typography.fontWeightLight,
  },
}));

interface UsersListItemProps extends User {
  department?: string;
  phone?: string;
  onClick: (id: number) => void;
}

const UsersListItem: FC<UsersListItemProps> = (props: UsersListItemProps) => {
  const { id, avatar, first_name, last_name, email, onClick } = props;

  const classes = useStyles();

  const fullName = `${first_name} ${last_name}`;

  return (
    <Grid
      data-testid="user-item-list"
      container
      className={classes.root}
      alignItems="stretch"
      justifyContent="space-between"
      onClick={() => onClick(id)}
    >
      <Grid item xs={4} className={classes.gridItem}>
        <List dense={true} disablePadding>
          <ListItem alignItems="center">
            <ListItemAvatar>
              <Avatar data-testid="user-avatar" alt={fullName} src={avatar} />
            </ListItemAvatar>

            <ListItemText primary={fullName} secondary={null} />
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={2} className={`${classes.gridItem} ${classes.gridItemCenter}`}>
        <Typography className={classes.text}>{props?.department || 'Sales'}</Typography>
      </Grid>

      <Grid item xs={3} className={`${classes.gridItem} ${classes.gridItemCenter}`}>
        <Typography className={classes.text}>{email}</Typography>
      </Grid>

      <Grid item xs={3} className={`${classes.gridItem} ${classes.gridItemCenter}`}>
        <Typography className={classes.text}>{props?.phone || '0305683294136'}</Typography>
      </Grid>
    </Grid>
  );
};

export { UsersListItem };
