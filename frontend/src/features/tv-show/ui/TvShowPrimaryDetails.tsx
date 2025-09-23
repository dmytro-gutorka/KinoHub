import { TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import { MediaPrimaryDetailsItem } from '@features/media/types/mediaTypes';
import BlockWrapper from '@shared/ui/BlockWrapper';
import MediaItemList from '@features/media/ui/MediaItemList';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

interface TvShowPrimaryDetailsProps {
  tmdbMediaData: TmdbTvShowDetails;
}

export default function TvShowPrimaryDetails({ tmdbMediaData }: TvShowPrimaryDetailsProps) {
  const {
    first_air_date: firstAirDate,
    last_air_date: lastAirDate,
    number_of_episodes: episodesNumber,
    production_countries: country,
    spoken_languages: language,
    status,
  } = tmdbMediaData;

  const spokenLanguage = language?.[0]?.english_name || 'N/A';
  const productionCountry = country?.[0]?.name || 'Unknown';

  const moviePrimaryDetailsItems: MediaPrimaryDetailsItem[] = [
    {
      label: 'First air date',
      data: firstAirDate || 'N/A',
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      label: 'Last air date',
      data: lastAirDate || 'N/A',
      icon: <EventNoteOutlinedIcon />,
    },
    {
      label: 'Status',
      data: status,
      icon: <AddTaskOutlinedIcon />,
    },
    {
      label: 'Total episodes',
      data: `${episodesNumber} episodes`,
      icon: <PlayCircleFilledWhiteOutlinedIcon />,
    },
    {
      label: 'Country',
      data: productionCountry,
      icon: <PublicOutlinedIcon />,
    },
    {
      label: 'Language',
      data: spokenLanguage,
      icon: <GTranslateOutlinedIcon />,
    },
  ];

  return (
    <BlockWrapper blockTitle="TV Show Details" isBoxShadow={false}>
      {moviePrimaryDetailsItems.map(({ label, data, icon }: MediaPrimaryDetailsItem) => (
        <MediaItemList label={label} data={data} icon={icon} key={label} />
      ))}
    </BlockWrapper>
  );
}
