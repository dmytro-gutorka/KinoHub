import { MediaHeaderProps } from '@features/media/model/types/mediaTypes';
import { MediaType } from '@shared/types/generalTypes';
import { TmdbVideo } from '@entities/types/tmdbEntities';
import { Box, Container, Stack, Typography } from '@mui/material';
import BackgroundBanner from '@shared/ui/BackgroundBanner';
import GenreChipList from '@shared/ui/GenreChipList';
import LabelList from '@shared/ui/LabelList/LabelList';
import useMediaHeaderData from '@features/media/model/hooks/useMediaHeaderData';
import MediaHeaderPoster from '@features/media/ui/MediaHeaderPoster';
import MediaActionButtonList from '@features/media/ui/MediaActionButtonList';

export default function MediaHeader<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
}: MediaHeaderProps<T>) {
  const { genres, mediaId, imgUrl, title } = useMediaHeaderData(tmdbMediaData, mediaType);

  const youtubeVideoKey: string | undefined = tmdbMediaData?.videos?.results?.find(
    (video: TmdbVideo): boolean => video.site === 'YouTube' && video.type === 'Trailer'
  )?.key;

  return (
    <Stack position="relative">
      <BackgroundBanner imgURL={imgUrl} />

      <Container maxWidth="lg">
        <Stack direction="row" pt={14} pb={6} gap={4} alignItems="end">
          <MediaHeaderPoster imgUrl={imgUrl} />

          <Box>
            <Typography variant="h1" mb={10} children={title} />

            <Stack gap={2}>
              <LabelList mediaType={mediaType} tmdbMediaData={tmdbMediaData} />
              <GenreChipList genres={genres} />
            </Stack>

            <MediaActionButtonList
              mediaActions={mediaAction}
              mediaId={mediaId}
              mediaType={mediaType}
              youtubeVideoKey={youtubeVideoKey}
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}
