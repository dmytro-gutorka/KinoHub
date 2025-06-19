import getMovieDetails from '../../../features/movies/api/getMovieDetails';
import MediaHeader from '../MediaHeader';
import MediaOverview from '../MediaOverview';

import { useLoaderData, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@mui/material';

const MediaDetailsPage = () => {

  const { id } = useParams();
  const mediaType = useLoaderData()

  const { data: mediaData, isLoading, isError, } = useQuery({
    queryKey: ['media', +id],
    queryFn: () => getMovieDetails(id, mediaType),
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching a movie</div>;

  return (
    <>
      <MediaHeader mediaData={mediaData} mediaType={mediaType}/>
      <Container maxWidth="lg">
        <MediaOverview mediaData={mediaData} mediaType={mediaType}/>
      </Container>
    </>
  )
};

export default MediaDetailsPage;


