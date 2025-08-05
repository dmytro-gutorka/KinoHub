import { TmdbMovieDetails, TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { MediaDetailsProps } from '@features/media/model/types/mediaTypes';
import { MediaType } from '@shared/types/generalTypes';
import { List } from '@mui/material';
import { JSX } from 'react';
import MediaContentBlock from './MediaContentBlock';
import MediaItemList from '@features/media/ui/MediaItemList';
import convertToUSD from '@shared/helpers/convertToUSD';

export default function MediaDetails<T extends MediaType>({
  tmdbMediaData,
  mediaType,
}: MediaDetailsProps<T>): JSX.Element | undefined {
  const { spoken_languages: language, production_countries: country, status } = tmdbMediaData;

  if (mediaType === 'tv') {
    const {
      first_air_date: airDate,
      number_of_episodes: episodesNumber,
      number_of_seasons: seasonsNumber,
    } = tmdbMediaData as TmdbTvShowDetails;

    return (
      <MediaContentBlock blockTitle="TV Show Details">
        <List>
          <MediaItemList label="Air date" data={airDate} />
          <MediaItemList label="Number of Seasons" data={seasonsNumber} />
          <MediaItemList label="Number of Episode" data={episodesNumber} />

          <MediaItemList label="Status" data={status} />
          <MediaItemList label="Language" data={language?.[0]?.english_name || 'N/A'} />
          <MediaItemList label="Country" data={country?.[0]?.name || 'Unknown'} />
        </List>
      </MediaContentBlock>
    );
  }

  if (mediaType === 'movie') {
    const { budget, revenue, release_date: releaseDate } = tmdbMediaData as TmdbMovieDetails;

    return (
      <MediaContentBlock blockTitle="Movie Details">
        <List>
          <MediaItemList label="Release date" data={releaseDate} />
          <MediaItemList label="Status" data={status} />

          {!!budget && <MediaItemList label="Budget" data={convertToUSD(budget)} />}
          {!!revenue && <MediaItemList label="Box Office" data={convertToUSD(revenue)} />}

          <MediaItemList label="Status" data={status} />
          <MediaItemList label="Language" data={language?.[0]?.english_name || 'N/A'} />
          <MediaItemList label="Country" data={country?.[0]?.name || 'Unknown'} />
        </List>
      </MediaContentBlock>
    );
  }
}
