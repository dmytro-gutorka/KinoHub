import { UserListItemDTO } from '@kinohub/schemas';
import { Pagination, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import usePeople from '@features/people/hooks/usePeople';
import Person from './Person';

export default function PeopleList() {
  const [page, setPage] = useState(1);
  const { data: people, isSuccess } = usePeople('', page);

  if (!isSuccess) return null;

  const { data: peopleList, totalPages } = people;

  console.log(page, totalPages);

  return (
    <Stack>
      <Typography variant="h5" mb={2}>
        Friends List
      </Typography>

      <Stack gap={10} direction="row" flexWrap="wrap" justifyContent="center">
        {peopleList.map((person: UserListItemDTO, index) => (
          <Person key={person.id} person={person} arrIndex={index} />
        ))}
      </Stack>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          onChange={(_, v) => setPage(v)}
          sx={{ marginBlock: 15, placeSelf: 'center' }}
          page={page}
        />
      )}
    </Stack>
  );
}
