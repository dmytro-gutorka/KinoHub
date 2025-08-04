import { MediaHeaderProps } from '@features/media/model/types/mediaTypes';
import { MediaType } from '@shared/types/generalTypes';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

import BackgroundBanner from '@shared/ui/BackgroundBanner';
import GenreChipList from '@shared/ui/GenreChipList';
import LabelList from '@shared/ui/LabelList/LabelList';
import MediaActionButtonList from '@shared/ui/MediaActionButtonList';
import useMediaHeaderData from '@features/media/model/hooks/useMediaHeaderData';

export default function MediaHeader<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
}: MediaHeaderProps<T>) {
  const { genres, mediaId, imgUrl, title } = useMediaHeaderData(tmdbMediaData, mediaType);

  const theme = useTheme();

  return (
    <Stack position="relative">
      <BackgroundBanner imgURL={imgUrl} />
      <Container maxWidth="lg">
        <Stack direction="row" pt={14} pb={6} gap={4} alignItems="end">
          <Box
            component="img"
            src={imgUrl}
            width="260px"
            height="380px"
            sx={{
              outline: `${theme.palette.transparentGrey} solid 2px`,
              borderRadius: '10px',
            }}
          />

          <Box>
            <Typography variant="h2" component="h1" fontWeight="700" mb={10} lineHeight={1.2}>
              {title}
            </Typography>
            <Stack gap={2}>
              <LabelList mediaType={mediaType} tmdbMediaData={tmdbMediaData} />
              <GenreChipList genres={genres} />
            </Stack>
            <MediaActionButtonList
              mediaActions={mediaAction}
              mediaId={mediaId}
              mediaType={mediaType}
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}
