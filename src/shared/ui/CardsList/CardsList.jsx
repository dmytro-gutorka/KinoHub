import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BASE_POSTER_URL } from '../../../config/constants';
import { Stack } from '@mui/material';

const CardsList = ({ movies }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {movies.map((movie) => {
        const { overview, title, poster_path: posterPath, id } = movie;
        const imgURL = `${BASE_POSTER_URL}${posterPath}`;

        return (
          <Card
            key={id}
            sx={{
              width: 276,
              border: '1px solid grey',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <CardMedia
              sx={{ height: 400, backgroundSize: 'cover' }}
              image={imgURL}
              title="Movie card"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${overview.split(' ').slice(0, 15).join(' ')}`} ...
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default CardsList;
