import { UserListItemDTO } from '@kinohub/schemas';
import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import usePeople from '@features/people/hooks/usePeople';
import Person from './Person';
import Search from '@shared/ui/Search';
import useDebouncedValue from '@shared/hooks/useDebouncedValue';

export default function PeopleList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebouncedValue(search, 500);
  const { data: people } = usePeople(debouncedSearch, page);

  const totalPage = people?.totalPages ?? 0;
  const peopleList = people?.data ?? [];

  return (
    <Stack gap={10}>
      <Search onChange={setSearch} search={search} />

      {!!peopleList.length && (
        <Stack gap={10} direction="row" flexWrap="wrap" justifyContent="center">
          {peopleList?.map((person: UserListItemDTO, index) => (
            <Person key={person.id} person={person} arrIndex={index} />
          ))}
        </Stack>
      )}

      {totalPage > 1 && (
        <Pagination
          count={totalPage}
          onChange={(_, v) => setPage(v)}
          page={page}
          sx={{ marginBlock: 15, placeSelf: 'center' }}
        />
      )}
    </Stack>
  );
}
