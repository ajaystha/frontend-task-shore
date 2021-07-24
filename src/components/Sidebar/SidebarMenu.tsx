import React, { FC } from 'react';
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

import {
  createStyles,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

import MonitorIcon from '../Icons/Monitor';
import InvoiceIcon from '../Icons/Invoice';
import ProfileIcon from '../Icons/Profile';
import PadnoteIcon from '../Icons/Padnote';
import PresentationIcon from '../Icons/Presentation';
import SettingsIcon from '../Icons/Settings';
import ShieldIcon from '../Icons/Shield';

const useStyles = makeStyles((theme) =>
  createStyles({
    list: { padding: 0 },
    listItem: {
      padding: theme.spacing(1.2, 3),
      color: '#ABAEB9',

      '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#233456',
      },
    },
  })
);

const menus = [
  { label: 'Point of Sales', icon: <MonitorIcon /> },
  { label: 'Invoices & returns', icon: <InvoiceIcon /> },
  { label: 'Contacts', icon: <ProfileIcon /> },
  { label: 'Inventory', icon: <PadnoteIcon /> },
  { label: 'Reports', icon: <PresentationIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
  { label: 'Imprint', icon: <ShieldIcon /> },
];

const SidebarMenu: FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <List className={classes.list}>
        {menus.map((menu, index) => (
          <Link key={menu.label} underline="none" component={RouterLink} to={'/users'}>
            <ListItem button className={classes.listItem} selected={menu.label === 'Contacts'}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Router>
  );
};

export { SidebarMenu };
