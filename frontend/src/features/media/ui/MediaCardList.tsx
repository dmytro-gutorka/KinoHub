import {
  TmdbGenre,
  TmdbMovieSearchedFilteredList,
  TmdbTvShowSearchedFilteredList,
} from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import MediaCardDetailed from '@features/media/ui/MediaCardDetailed';
import { MediaType } from '@shared/types/generalTypes';

interface MediaCardListProps {
  mediaList: Array<TmdbMovieSearchedFilteredList | TmdbTvShowSearchedFilteredList>;
  genresList: Array<TmdbGenre>;
  mediaType: MediaType;
}

export default function MediaCardList({ mediaList, genresList, mediaType }: MediaCardListProps) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaList?.map((media) => {
        const genreNames = media.genre_ids.map((genreId) =>
          genresList.find((genre) => genre.id === genreId && { name: genre?.name })
        );

        return (
          <MediaCardDetailed
            key={media.id}
            mediaType={mediaType}
            mediaItem={media}
            relevantPoster={getPosterUrl(media.poster_path)}
            genreNames={genreNames}
          />
        );
      })}
    </Stack>
  );
}
