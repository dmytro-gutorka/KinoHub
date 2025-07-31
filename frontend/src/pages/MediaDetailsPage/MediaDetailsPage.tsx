import { MediaType } from '@shared/types/generalTypes';
import { Box, Container } from '@mui/material';
import { useLoaderData, useParams } from 'react-router';

import MediaHeader from '@widgets/MediaHeader';
import MediaOverview from '@widgets/MediaOverview/ui/MediaOverview';
import useEnsureMediaDetails from '@widgets/MediaDetailsPage/hooks/useEnsureMediaDetails';
import useEnsureMediaAction from '@widgets/MediaDetailsPage/hooks/useEnsureMediaAction';
import useTmdbMediaDetails from '@widgets/MediaDetailsPage/hooks/useTmdbMediaDetails';

export default function MediaDetailsPage() {
  const mediaType: MediaType = useLoaderData();
  const params: Readonly<any> = useParams();
  const mediaId: number = Number(params?.id);

  const { data: tmdbMediaData, isLoading: isTmdbMediaLoading } = useTmdbMediaDetails(
    mediaId,
    mediaType
  );
  const { mediaData, isMediaLoading, isMediaSuccess } = useEnsureMediaDetails(mediaId, mediaType);
  const { mediaAction, isActionsLoading } = useEnsureMediaAction(mediaId, mediaType, {
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
            />
          </Container>
        </Box>
      </>
    );
  }
}
