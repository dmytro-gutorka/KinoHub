import { MediaType } from '@shared/types/generalTypes';
import { TmdbMovieDetails, TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { MediaDetailsProps } from '@features/media/model/mediaTypes';
import { List } from '@mui/material';
import { JSX } from 'react';
import ItemListSpaceBetween from '@shared/ui/ItemListSpaceBetween';
import convertToUSD from '@shared/helpers/convertToUSD';
import MediaContentBlock from './MediaContentBlock';

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
          <ItemListSpaceBetween label="Air date" data={airDate} />
          <ItemListSpaceBetween label="Number of Seasons" data={seasonsNumber} />
          <ItemListSpaceBetween label="Number of Episode" data={episodesNumber} />

          <ItemListSpaceBetween label="Status" data={status} />
          <ItemListSpaceBetween label="Language" data={language?.[0]?.english_name || 'N/A'} />
          <ItemListSpaceBetween label="Country" data={country?.[0]?.name || 'Unknown'} />
        </List>
      </MediaContentBlock>
    );
  }

  if (mediaType === 'movie') {
    const { budget, revenue, release_date: releaseDate } = tmdbMediaData as TmdbMovieDetails;

    return (
      <MediaContentBlock blockTitle="Movie Details">
        <List>
          <ItemListSpaceBetween label="Release date" data={releaseDate} />
          <ItemListSpaceBetween label="Status" data={status} />

          {!!budget && <ItemListSpaceBetween label="Budget" data={convertToUSD(budget)} />}
          {!!revenue && <ItemListSpaceBetween label="Box Office" data={convertToUSD(revenue)} />}

          <ItemListSpaceBetween label="Status" data={status} />
          <ItemListSpaceBetween label="Language" data={language?.[0]?.english_name || 'N/A'} />
          <ItemListSpaceBetween label="Country" data={country?.[0]?.name || 'Unknown'} />
        </List>
      </MediaContentBlock>
    );
  }
}
