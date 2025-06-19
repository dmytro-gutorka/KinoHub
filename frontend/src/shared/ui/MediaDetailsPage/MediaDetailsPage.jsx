import getMovieDetails from '../../../features/movies/api/getMovieDetails';
import getMediaActions from '../../../features/movies/api/getMediaActions';
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

  const { data: actionData} = useQuery({
    queryKey: ['actionData', +id],
    queryFn: () => getMediaActions(id),
    staleTime: Infinity,
  });
  // ОТПРАВИЛЯТЬ ПОСТ КАЖДЫЙ РАЗ ПРИ ОТКРЫТИИ СТРАНИЦЫ С movieID, userId, mediType и потом
  // не прийдеться тогда делать условия на POST и PUT
  // ОТПРАВИЛЯТЬ ПОСТ КАЖДЫЙ РАЗ ПРИ ОТКРЫТИИ СТРАНИЦЫ С movieID, userId, mediType и потом
  // не прийдеться тогда делать условия на POST и PUT
  // ОТПРАВИЛЯТЬ ПОСТ КАЖДЫЙ РАЗ ПРИ ОТКРЫТИИ СТРАНИЦЫ С movieID, userId, mediType и потом
  // не прийдеться тогда делать условия на POST и PUT
  // ОТПРАВИЛЯТЬ ПОСТ КАЖДЫЙ РАЗ ПРИ ОТКРЫТИИ СТРАНИЦЫ С movieID, userId, mediType и потом
  // не прийдеться тогда делать условия на POST и PUT

  if (actionData) console.log(actionData)

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


