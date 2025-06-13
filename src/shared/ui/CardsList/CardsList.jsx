import PreviewCard from '../PreviewCard';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BASE_POSTER_URL } from '../../../config/constants';

const CardsList = ({ movies }) => {
  console.log(1, movies);
  return (
    <div>
      {movies.map((movie) => {
        const { overview, title, poster_path: posterPath } = movie;
        const imgURL = `${BASE_POSTER_URL}${posterPath}`;

        return (
          <Card sx={{ width: 345 }}>
            <CardMedia sx={{ height: 600 }} image={imgURL} title="Movie card" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {overview}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default CardsList;
