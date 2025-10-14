import { UserListItemDTO } from '@kinohub/schemas';
import { Stack } from '@mui/material';
import usePeople from '@features/people/hooks/usePeople';
import Person from './Person';

export default function PeopleList() {
  const { data: people, isSuccess } = usePeople();
  if (!isSuccess) return null;

  const peopleList = people.data;

  console.log(people);
  return (
    <Stack gap={4}>
      {peopleList.map((person: UserListItemDTO) => (
        <Person key={person.id} person={person} />
      ))}
    </Stack>
  );
}
