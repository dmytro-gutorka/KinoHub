import { List, useTheme } from '@mui/material';
import ItemListSpaceBetween from '@shared/ui/ItemListSpaceBetween';
import convertToUSD from '@shared/helpers/convertToUSD';
import MediaContentBlock from '@features/media/ui/MediaContent';

export default function MediaDetails({ tmdbMediaData }) {
  const {
    spoken_languages: language,
    production_countries: country,
    release_date: releaseDate,
    first_air_date: airDate,
    budget,
    revenue,
    status,
  } = tmdbMediaData;

  const theme = useTheme();

  return (
    <MediaContentBlock blockTitle="Movie Details">
      <List>
        <ItemListSpaceBetween label="Release date" data={releaseDate || airDate} />
        <ItemListSpaceBetween label="Status" data={status} />

        {!!budget && <ItemListSpaceBetween label="Budget" data={convertToUSD(budget)} />}
        {!!revenue && <ItemListSpaceBetween label="Box Office" data={convertToUSD(revenue)} />}

        <ItemListSpaceBetween label="Language" data={language?.at(0)?.english_name} />
        <ItemListSpaceBetween label="Country" data={country?.at(0)?.name} />
      </List>
    </MediaContentBlock>
  );
}
