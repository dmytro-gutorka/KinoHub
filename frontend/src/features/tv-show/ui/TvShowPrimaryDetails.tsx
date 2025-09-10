import { TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { List } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';
import MediaItemList from '@features/media/ui/MediaItemList';

export default function TvShowPrimaryDetails({
  tmdbMediaData,
}: {
  tmdbMediaData: TmdbTvShowDetails;
}) {
  const {
    first_air_date: airDate,
    number_of_episodes: episodesNumber,
    number_of_seasons: seasonsNumber,
    production_countries: country,
    spoken_languages: language,
    status,
  } = tmdbMediaData;

  return (
    <BlockWrapper blockTitle="TV Show Details" isBoxShadow={false}>
      <List>
        <MediaItemList label="Number of Seasons" data={seasonsNumber} />
        <MediaItemList label="Number of Episode" data={episodesNumber} />
        <MediaItemList label="Language" data={language?.[0]?.english_name || 'N/A'} />
        <MediaItemList label="Air date" data={airDate} />
        <MediaItemList label="Status" data={status} />
        <MediaItemList label="Country" data={country?.[0]?.name || 'Unknown'} />
      </List>
    </BlockWrapper>
  );
}
