import { Stack } from '@mui/material';
import getPosterUrl from '../../helpers/getPosterUrl';
import MediaCardPreviewLong from '../MediaCardPreviewLong';

const MediaCardList = ({ mediaList, genresList }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaList?.map((media) => {
        const { poster_path: posterPath, genre_ids: genres } = media;
        const relevantPoster = getPosterUrl(posterPath);
        const genreNames = genres.map((genreId) =>
          genresList.find((genre) => genre.id === genreId && { name: genre?.name })
        );

        return (
          <MediaCardPreviewLong
            key={media.id}
            mediaData={media}
            relevantPoster={relevantPoster}
            genreNames={genreNames}
          />
        );
      })}
    </Stack>
  );
};

export default MediaCardList;
