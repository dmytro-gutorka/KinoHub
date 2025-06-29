import useMediaDetailsPage from '../../widgets/MediaDetailsPage/hooks/useMediaDetailsPage';
import MediaOverview from '../../widgets/MediaOverview';
import MediaHeader from '../../widgets/MediaHeader';

import { useLoaderData, useParams } from 'react-router';
import { Box, Container } from '@mui/material';

const MediaDetailsPage = () => {
  const mediaType = useLoaderData();

  const { id } = useParams();
  const { data: mediaData, isLoading, isError } = useMediaDetailsPage(Number(id), mediaType);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching a movie</div>;

  return (
    <>
      <Box component="main">
        <MediaHeader mediaData={mediaData} mediaType={mediaType} />
        <Container maxWidth="lg">
          <MediaOverview mediaData={mediaData} mediaType={mediaType} />
        </Container>
      </Box>
    </>
  );
};

export default MediaDetailsPage;
