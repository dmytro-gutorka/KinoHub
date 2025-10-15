import { UserListItemDTO } from '@kinohub/schemas';
import { Stack } from '@mui/material';
import usePeople from '@features/people/hooks/usePeople';
import Person from './Person';

export default function PeopleList() {
  const { data: people, isSuccess } = usePeople();
  if (!isSuccess) return null;

  const peopleList = people.data;

  return (
    <Stack gap={10} direction="row" flexWrap="wrap" justifyContent="center">
      {peopleList.map((person: UserListItemDTO, index) => (
        <Person key={person.id} person={person} arrIndex={index} />
      ))}
    </Stack>
  );
}
