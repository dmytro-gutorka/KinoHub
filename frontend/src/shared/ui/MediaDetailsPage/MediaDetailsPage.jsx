import getMovieDetails from '../../../features/movies/api/getMovieDetails';
import MediaHeader from '../MediaHeader';
import MediaOverview from '../MediaOverview';

import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { Container } from '@mui/material';

const MediaDetailsPage = () => {

  const { id } = useParams();

  const { data: mediaData, isLoading, isError, } = useQuery({
    queryKey: ['movie', +id],
    queryFn: () => getMovieDetails(id),
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching a movie</div>;

  return (
    <>
      <MediaHeader mediaData={mediaData}/>
      <Container maxWidth="lg">
        <MediaOverview mediaData={mediaData}/>
      </Container>
    </>
  )
};

export default MediaDetailsPage;


