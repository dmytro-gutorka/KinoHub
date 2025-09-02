import { UserMediaStats } from '@shared/types/generalTypes';
import { MediaContentBlock } from '@features/media';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';

interface DashboardTopGenresProps {
  userMediaStats:   UserMediaStats
}
export default function DashboardTopGenres({ userMediaStats }: DashboardTopGenresProps) {
  return (
    <MediaContentBlock blockTitle="Top Genres">
      <List>
        {userMediaStats.favoriteGenres.map(({ name, count }) => (
          <ListItem key={name}>
            <ListItemText primary={name} secondary={`Watched ${count} movies and tv shows`} />
          </ListItem>
        ))}
      </List>
    </MediaContentBlock>
  );
}
