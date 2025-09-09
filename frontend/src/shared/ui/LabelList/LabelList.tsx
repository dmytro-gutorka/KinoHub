import { MediaType } from '@shared/types/generalTypes';
import {
  TmdbMediaDetailsResponse,
  TmdbMovieDetails,
  TmdbTvShowDetails,
} from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import LabelWithIcon from '../LabelWithIcon';
import getYearFromDate from '@shared/helpers/getYearFromDate';

interface LabelListProps<T extends MediaType> {
  mediaType: T;
  tmdbMediaData: TmdbMediaDetailsResponse<T>;
}

export default function LabelList<T extends MediaType>({
  mediaType,
  tmdbMediaData,
}: LabelListProps<T>) {
  const { vote_average: voteAverage, original_language: language } = tmdbMediaData;
  let numberOfSeasons: number = 0;
  let numberOfEpisodes: number = 0;
  let episodeRunTime: number | string | undefined;
  let runtime: number | string = 'N/A';
  let releaseDate: string = 'Unknown';

  if (mediaType === 'tv') {
    numberOfSeasons = (tmdbMediaData as TmdbTvShowDetails).number_of_seasons;
    numberOfEpisodes = (tmdbMediaData as TmdbTvShowDetails).number_of_episodes;
    episodeRunTime = (tmdbMediaData as TmdbTvShowDetails).episode_run_time[0];
    releaseDate = (tmdbMediaData as TmdbTvShowDetails).first_air_date;
    runtime = (tmdbMediaData as TmdbTvShowDetails).first_air_date?.[0];
  }

  if (mediaType === 'movie') {
    releaseDate = (tmdbMediaData as TmdbMovieDetails).release_date;
    runtime = (tmdbMediaData as TmdbMovieDetails).runtime || 'N/A';
  }

  console.log(tmdbMediaData);
  const movieLabels = [
    {
      icon: <StarBorderIcon />,
      data: voteAverage?.toFixed(2) + '/10',
    },
    {
      icon: <CalendarTodayOutlinedIcon fontSize="small" />,
      data: getYearFromDate(releaseDate),
    },
    {
      icon: <AccessTimeIcon />,
      data: runtime ? runtime + 'm' : 'N/A',
    },
    { icon: <LanguageIcon />, data: language.toUpperCase() },
  ];

  const tvLabels = [
    {
      icon: <StarBorderIcon />,
      data: voteAverage?.toFixed(2) + '/10',
    },
    {
      icon: <LiveTvOutlinedIcon fontSize="small" />,
      data: numberOfSeasons,
    },
    {
      icon: <PlayCircleOutlineOutlinedIcon fontSize="small" />,
      data: numberOfEpisodes,
    },
    {
      icon: <AccessTimeIcon />,
      data: episodeRunTime ? `~${episodeRunTime}m per episode` : 'N/A',
    },
  ];

  const labels = mediaType === 'tv' ? tvLabels : movieLabels;

  return (
    <Stack direction="row" spacing={4}>
      {labels.map(({ data, icon }, index) => (
        <LabelWithIcon key={index} label={data}>
          {icon}
        </LabelWithIcon>
      ))}
    </Stack>
  );
}
