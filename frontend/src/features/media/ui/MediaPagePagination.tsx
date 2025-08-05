import { Pagination, Stack } from '@mui/material';

interface MediaPagePaginationProps {
  pages: number | undefined;
  handlePageChange: any;
}

export default function MediaPagePagination({ pages, handlePageChange }: MediaPagePaginationProps) {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" my={6}>
      <Pagination count={pages} variant="outlined" onChange={handlePageChange} />
    </Stack>
  );
}
