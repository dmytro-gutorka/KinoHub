import { BASE_POSTER_URL } from '../../../../config/constants';
import {
  Box,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';

const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  '& tr:nth-of-type(even)': {
    backgroundColor: '#0b0b0b',
  },
}));

const StyledImageBox = styled(Box)(() => ({
  width: '100%',
  maxWidth: 300,
  placeSelf: 'start end',
}));

const MovieContent = ({ movie }) => {
  const {
    adult,
    budget,
    genres,
    title,
    status,
    overview,
    poster_path: posterPath,
    production_countries: countries,
    release_date: releaseDate,
    vote_average: voteAvg,
    vote_count: voteCount,
  } = movie;

  const imgURL = `${BASE_POSTER_URL}${posterPath}`;

  return (
    <Stack direction="row" gap={4}>
      <StyledImageBox component="img" src={imgURL} alt="movie poster" />
      <Box>
        <Box>{title}</Box>
        <Box>{overview}</Box>
        <TableContainer component={Paper} sx={{ width: '100%', placeSelf: 'start end' }}>
          <StyledTable aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Rating
                </TableCell>
                <TableCell align="left">
                  {voteAvg} ({voteCount} votes)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Release date
                </TableCell>
                <TableCell align="left">{releaseDate}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Countries
                </TableCell>
                <TableCell align="left">
                  {countries.map((country) => country.name).join(', ')}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Genres
                </TableCell>
                <TableCell align="left">{genres.map((genre) => genre.name).join(', ')}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Status
                </TableCell>
                <TableCell align="left">{status}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell width="25%" padding="10px" align="left">
                  Budget
                </TableCell>
                <TableCell align="left">{budget}$</TableCell>
              </TableRow>
              {adult && (
                <TableRow>
                  <TableCell width="25%" padding="10px" align="left">
                    Age
                  </TableCell>
                  <TableCell align="left">18+</TableCell>
                </TableRow>
              )}
            </TableBody>
          </StyledTable>
        </TableContainer>
      </Box>
    </Stack>
  );
};

export default MovieContent;
