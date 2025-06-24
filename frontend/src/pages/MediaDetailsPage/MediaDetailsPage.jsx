import getMovieDetails from '../../features/movies/api/getMovieDetails';
import MediaOverview from '../../shared/ui/MediaOverview';
import MediaHeader from '../../shared/ui/MediaHeader';

import { useLoaderData, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import {Box, Container} from '@mui/material';

const MediaDetailsPage = () => {

  const { id } = useParams();
  const mediaType = useLoaderData()

  const { data: mediaData, isLoading, isError, } = useQuery({
    queryKey: ['media', +id],
    queryFn: () => getMovieDetails(id, mediaType),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching a movie</div>;

  return (
    <>
        <Box component='main' >
            {/*// перебивает картинку баннера*/}
          <MediaHeader mediaData={mediaData} mediaType={mediaType}/>
          <Container maxWidth="lg">
            <MediaOverview mediaData={mediaData} mediaType={mediaType}/>
          </Container>
        </Box>
    </>
  )
};

export default MediaDetailsPage;


