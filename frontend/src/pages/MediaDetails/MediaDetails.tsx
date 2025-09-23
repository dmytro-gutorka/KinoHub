import { MediaType } from '@shared/types/generalTypes';
import { Params, useLoaderData, useParams } from 'react-router';
import { Box, Container } from '@mui/material';
import useTmdbMediaDetails from '@features/media/hooks/useTmdbMediaDetails';
import useEnsureMediaDetails from '@features/media/hooks/useEnsureMediaDetails';
import useGetOrCreateMediaAction from '@features/media/hooks/useGetOrCreateMediaAction';
import MediaHeader from '@widgets/MediaHeader';
import MediaOverview from '@widgets/MediaOverview';

export default function MediaDetails() {
  const mediaType: MediaType = useLoaderData();
  const params: Readonly<Params<string>> = useParams();
  const mediaId: number = Number(params?.id);

  const { tmdbMediaData, isTmdbMediaLoading } = useTmdbMediaDetails(mediaId, mediaType);
  const { mediaData, isMediaLoading, isMediaSuccess } = useEnsureMediaDetails(mediaId, mediaType);
  const { mediaAction, isActionsLoading } = useGetOrCreateMediaAction(mediaId, mediaType, {
    enabled: isMediaSuccess && !!mediaData,
  });

  if (isMediaLoading || isActionsLoading || isTmdbMediaLoading) return <div>Loading...</div>;

  if (mediaData && mediaAction && tmdbMediaData) {
    return (
      <>
        <Box component="main">
          <MediaHeader
            tmdbMediaData={tmdbMediaData}
            mediaAction={mediaAction}
            mediaType={mediaType}
          />
          <Container maxWidth="lg">
            <MediaOverview
              tmdbMediaData={tmdbMediaData}
              mediaAction={mediaAction}
              mediaType={mediaType}
              mediaId={mediaId}
            />
          </Container>
        </Box>
      </>
    );
  }
}
