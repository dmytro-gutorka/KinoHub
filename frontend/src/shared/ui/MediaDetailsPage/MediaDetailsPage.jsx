import MediaHeader from '../MediaHeader';
import MediaOverview from '../MediaOverview';
import { Container } from '@mui/material';

const MediaDetailsPage = () => {
  return (
    <>
      <Container maxWidth="lg">
      <MediaHeader />
      <MediaOverview />
      </Container>
    </>
  )
  // Episodes if media type === show
  // Overview + Cast & Crew
  // Reviews
};

export default MediaDetailsPage;