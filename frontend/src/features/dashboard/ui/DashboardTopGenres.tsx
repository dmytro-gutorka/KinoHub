import { MediaContentBlock } from '@features/media';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function DashboardTopGenres({ userMediaStats }) {
  return (
    <MediaContentBlock blockTitle="Top Genres">
      <List>
        {userMediaStats.favoriteGenres.map(({ name, count }) => (
          <ListItem>
            <ListItemText primary={name} secondary={`Watched ${count} movies and tv shows`} />
          </ListItem>
        ))}
      </List>
    </MediaContentBlock>
  );
}
