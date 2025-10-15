import { Container, Typography } from '@mui/material';
import PeopleList from '@features/people/ui/PeopleList';

export default function People() {
  return (
    <Container maxWidth="lg" sx={{ padding: 10 }}>
      <Typography variant="h5" mb={2}>
        Friends List
      </Typography>
      <PeopleList />
    </Container>
  );
}
