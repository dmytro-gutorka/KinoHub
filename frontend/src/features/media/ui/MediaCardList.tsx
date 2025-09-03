import {
  TmdbGenre,
  TmdbMovieSearchedFilteredList,
  TmdbTvShowSearchedFilteredList,
} from '@entities/types/tmdbEntities';
import { MediaType } from '@shared/types/generalTypes';
import { getMediaGenres } from '@shared/helpers/getMediaGenres';
import { Stack } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import MediaCardDetailed from '@features/media/ui/MediaCardDetailed';

interface MediaCardListProps {
  mediaList: (TmdbMovieSearchedFilteredList | TmdbTvShowSearchedFilteredList)[];
  tmdbGenreList: TmdbGenre[];
  mediaType: MediaType;
}

export default function MediaCardList({ mediaList, tmdbGenreList, mediaType }: MediaCardListProps) {

  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaList?.map(media => {

        const {genre_ids: genreIds, id: mediaId, poster_path: posterPath} = media
        const genreList: TmdbGenre[] = getMediaGenres(genreIds, tmdbGenreList)

        return (
          <MediaCardDetailed
            key={mediaId}
            mediaType={mediaType}
            mediaItem={media}
            relevantPoster={getPosterUrl(posterPath)}
            genreList={genreList}
          />
        );
      })}
    </Stack>
  );
}
