import { Container } from '@mui/material';
import PeopleList from '@features/people/ui/PeopleList';

export default function People() {
  return (
    <Container maxWidth="lg" sx={{ padding: 10 }}>
      <PeopleList />
    </Container>
  );
}
