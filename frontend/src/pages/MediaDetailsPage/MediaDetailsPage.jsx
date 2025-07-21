import { Box, Container } from '@mui/material';
import { useLoaderData, useParams } from 'react-router';

import useMediaDetails from '../../widgets/MediaDetailsPage/hooks/useMediaDetails';
import MediaHeader from '../../widgets/MediaHeader';
import MediaOverview from '../../widgets/MediaOverview';

const MediaDetailsPage = () => {
  const mediaType = useLoaderData();
  const { id } = useParams();
  const { mediaDataWithActions } = useMediaDetails(Number(id), mediaType);

  if (mediaDataWithActions) {
    return (
      <>
        <Box component="main">
          <MediaHeader mediaDataWithActions={mediaDataWithActions} mediaType={mediaType} />
          <Container maxWidth="lg">
            <MediaOverview mediaDataWithActions={mediaDataWithActions} mediaType={mediaType} />
          </Container>
        </Box>
      </>
    );
  }
};

export default MediaDetailsPage;
