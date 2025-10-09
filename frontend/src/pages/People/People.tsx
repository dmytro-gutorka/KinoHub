import { Container } from '@mui/material';
import PeopleList from '@features/people/ui/PeopleList';

export default function People() {
  return (
    <Container maxWidth="lg">
      <PeopleList/>
    </Container>
  );
}