import React, { FC, ChangeEvent } from 'react';
import { Theme, makeStyles, Grid, TextField, Button } from '@material-ui/core';

import SearchIcon from '../Icons/Search';
import CloseIcon from '../Icons/Close';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {},
  textFieldWrapper: {
    flexGrow: 1,
  },
  searchField: {
    backgroundColor: '#EBECEE',
    borderRadius: 3,

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  icon: {
    width: 16,
    height: 'auto',
  },
  iconSearch: {
    marginRight: theme.spacing(2),
  },
  iconClose: {
    marginleft: theme.spacing(2),
    cursor: 'pointer',
  },
  addButton: {
    width: 135,
    borderRadius: 25,
  },
}));

type UsersToolbarProps = {
  searchText: string;
  onSearchText: (ev: ChangeEvent<HTMLInputElement>) => void;
  onClearInput: () => void;
};

const UsersToolbar: FC<UsersToolbarProps> = (props: UsersToolbarProps) => {
  const { searchText, onSearchText, onClearInput } = props;
  const classes = useStyles();

  return (
    <Grid container className={classes.toolbar} alignItems="center" spacing={2}>
      <Grid item className={classes.textFieldWrapper}>
        <TextField
          className={classes.searchField}
          variant="outlined"
          margin="dense"
          size="small"
          placeholder="Search user"
          fullWidth
          value={searchText}
          InputProps={{
            startAdornment: <SearchIcon className={`${classes.icon} ${classes.iconSearch}`} />,
            endAdornment: searchText ? (
              <CloseIcon
                className={`${classes.icon} ${classes.iconClose}`}
                onClick={onClearInput}
              />
            ) : null,
          }}
          onChange={onSearchText}
        />
      </Grid>

      <Grid item>
        <Button variant="outlined" color="primary" className={classes.addButton}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export { UsersToolbar };
