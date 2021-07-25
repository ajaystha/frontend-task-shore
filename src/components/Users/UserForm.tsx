import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import {
  Theme,
  makeStyles,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from '@material-ui/core';

import { User, UserFormData } from '../../shared/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    color: '#403B5A',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

type UserFormProps = {
  user: User | null;
  onUpdate: (id: number | undefined, formData: UserFormData) => void;
  onCancel: () => void;
};

const initialFormState = {
  first_name: '',
  last_name: '',
  gender: '',
  email: '',
  department: '',
  contribution: 0,
  active: true,
};

const UserForm: FC<UserFormProps> = (props: UserFormProps) => {
  const { user, onUpdate, onCancel } = props;

  const classes = useStyles();

  const [formData, setFormData] = useState<UserFormData>(initialFormState);
  const [errors, setErrors] = useState<any>({});

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  React.useEffect(() => {
    if (!user) return;

    setFormData({
      first_name: user?.first_name,
      last_name: user?.last_name,
      gender: '',
      email: user?.email,
      department: '',
      contribution: 0,
      active: true,
    });
  }, [user]);

  const validateFields = () => {
    const { first_name, email } = formData;

    const errs: any = {};

    if (!first_name) {
      errs.firstName = 'Firstname is required';
    }
    if (!email) {
      errs.email = 'Email is required';
    }
    if (!emailRegex.test(email)) {
      errs.email = 'Enter a valid email';
    }

    setErrors(errs);

    return Boolean(Object.keys(errs).length);
  };

  const validateEmail = () => {
    const { email } = formData;

    if (emailRegex.test(email)) {
      setErrors({ ...errors, email: null });
    } else {
      setErrors({ ...errors, email: 'Enter a valid email' });
    }
  };

  const handleUpdate = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const hasErrors = validateFields();
    if (hasErrors) return;

    onUpdate(user?.id, formData);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleUpdate}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <label htmlFor="firstName">First Name:</label>
          <TextField
            id="firstName"
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="Enter name here"
            fullWidth
            value={formData.first_name}
            onChange={(ev: React.ChangeEvent<{ value: string }>) =>
              setFormData({ ...formData, first_name: ev.target.value })
            }
            error={errors?.firstName}
            helperText={errors?.firstName}
          />
        </Grid>

        <Grid item xs={6}>
          <label htmlFor="lastName">Last Name:</label>
          <TextField
            id="lastName"
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="Enter last name here"
            fullWidth
            value={formData.last_name}
            onChange={(ev: React.ChangeEvent<{ value: string }>) =>
              setFormData({ ...formData, last_name: ev.target.value })
            }
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset" fullWidth>
            <label htmlFor="gender">Gender:</label>
            <RadioGroup
              className={classes.radioGroup}
              aria-label="gender"
              name="gender"
              row
              value={formData.gender}
              onChange={(ev: React.ChangeEvent<{ value: string }>) =>
                setFormData({ ...formData, gender: ev.target.value })
              }
            >
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <label htmlFor="email">Email:</label>
          <TextField
            id="email"
            type="email"
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="example@email.com"
            fullWidth
            value={formData.email}
            onChange={(ev: React.ChangeEvent<{ value: string }>) =>
              setFormData({ ...formData, email: ev.target.value })
            }
            onBlur={validateEmail}
            error={errors?.email}
            helperText={errors?.email}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label htmlFor="department">Department:</label>
          <Select
            id="department"
            variant="outlined"
            margin="dense"
            fullWidth
            style={{ marginTop: 8 }}
            value={formData.department}
            onChange={(ev: ChangeEvent<{ value: unknown }>) =>
              setFormData({ ...formData, department: ev.target.value as string })
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="marketing">Marketing</MenuItem>
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="it">IT</MenuItem>
            <MenuItem value="support">Support</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={6}>
          <label htmlFor="contribution">contribution</label>
          <TextField
            id="amount"
            variant="outlined"
            margin="dense"
            size="small"
            placeholder="eg. 4.870,65"
            fullWidth
            type="number"
            value={formData.contribution}
            InputProps={{ endAdornment: '€' }}
            onChange={(ev: React.ChangeEvent<{ value: string }>) =>
              setFormData({ ...formData, contribution: Number(ev.target.value) })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="active"
                color="primary"
                checked={formData.active}
                onChange={(ev: React.ChangeEvent<{ checked: boolean }>) =>
                  setFormData({ ...formData, active: ev.target.checked })
                }
              />
            }
            label="Active"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} justifyContent="flex-end">
        <Grid item xs={2}>
          <Button variant="outlined" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button type="submit" variant="contained" color="primary" disableElevation>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export { UserForm };
