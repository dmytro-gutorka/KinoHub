import { UserListItemDTO } from '@kinohub/schemas';
import { Stack } from '@mui/material';
import useFriends from '@features/people/hooks/useFriends';
import Person from './Person';

export default function PeopleList() {
  const { data: people, isSuccess } = useFriends();
  if (!isSuccess) return null;

  console.log(people);
  return (
    <Stack gap={4}>
      {people.map((person: UserListItemDTO) => (
        <Person key={person.id} person={person} />
      ))}
    </Stack>
  );
}
