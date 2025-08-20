// import { List } from '@mui/icons-material';
// import { ListItem, ListItemText } from '@mui/material';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Stack } from '@mui/material';

export default function DashboardTopGenres({ userMediaStats }) {
  console.log(userMediaStats.favoriteGenres);
  return (
    <Stack>
      <List>
        {userMediaStats.favoriteGenres.map(({ name, count }) => (
          <ListItem>
            <ListItemText primary={name} secondary={`Watched ${count} movies and tv shows`} />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
