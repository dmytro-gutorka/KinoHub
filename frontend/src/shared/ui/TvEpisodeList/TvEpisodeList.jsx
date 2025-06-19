import getTvShowSeasonDetails from '../../../features/movies/api/getTvShowSeasonDetails';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';

const TvEpisodeList = ({tvSeason}) => {
  const { id } = useParams()

  const { data } = useQuery({
    queryKey: ['tvShowSeason', +id, tvSeason],
    queryFn: () => getTvShowSeasonDetails(id, tvSeason),
    staleTime: Infinity,
  });

  return (
    <div>
          {data?.episodes?.map(episode => {
            const {
              episode_number: episodeNumber,
              vote_average: voteAverage,
              still_path: posterPath,
              air_date: airDate,
              overview,
              runtime,
              name,
              id
            } = episode
            return <span></span>
          })}
    </div>
  )


};

export default TvEpisodeList;