import { Box, List, Typography, useTheme } from '@mui/material';
import ItemListSpaceBetween from '../ItemListSpaceBetween';
import convertToUDS from '../../helpers/convertToUSD';

const MediaDetailsBlock = ({ mediaData }) => {
  const {
    spoken_languages: language,
    production_countries: country,
    release_date: releaseDate,
    first_air_date: airDate,
    budget,
    revenue,
    status,
  } = mediaData;

  const theme = useTheme();

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customComponents.border}>
      <Typography variant="h5" component="h3">
        Movie Details
      </Typography>
      <List>
        <ItemListSpaceBetween label="Release date" data={releaseDate || airDate} />
        <ItemListSpaceBetween label="Status" data={status} />
        {budget && <ItemListSpaceBetween label="Budget" data={convertToUDS(budget)} />}
        {revenue && <ItemListSpaceBetween label="Box Office" data={convertToUDS(revenue)} />}
        <ItemListSpaceBetween label="Language" data={language?.at(0)?.english_name} />
        <ItemListSpaceBetween label="Country" data={country?.at(0)?.name} />
      </List>
    </Box>
  );
};

export default MediaDetailsBlock;
