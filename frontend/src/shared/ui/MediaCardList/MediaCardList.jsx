import { Stack } from '@mui/material';
import getPosterURL from '../../helpers/getPosterURL';
import MediaCardPreviewLong from '../MediaCardPreviewLong';

const MediaCardList = ({ mediaData, mediaGenres }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaData.map((media) => {
        const { poster_path: posterPath, genre_ids: genres } = media;
        const relevantPoster = getPosterURL(posterPath);
        const genreNames = genres.map((genreId) =>
          mediaGenres.find((genre) => genre.id === genreId && { name: genre?.name })
        );

        return (
          <MediaCardPreviewLong
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
