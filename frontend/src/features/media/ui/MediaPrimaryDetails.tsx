import { TmdbMovieDetails } from '@entities/types/tmdbEntities';
import { MediaPrimaryDetailsItem } from '@features/media/types/mediaTypes';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import convertToUSD from '@shared/helpers/convertToUSD';
import MediaItemList from '@features/media/ui/MediaItemList';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface MoviePrimaryDetailsProps {
  tmdbMediaData: TmdbMovieDetails;
}

export default function MoviePrimaryDetails({ tmdbMediaData }: MoviePrimaryDetailsProps) {
  const {
    production_countries: country,
    release_date: releaseDate,
    spoken_languages: language,
    budget,
    revenue,
    status,
  } = tmdbMediaData;

  const spokenLanguage = language?.[0]?.english_name || 'N/A';
  const productionCountry = country[0].name || 'N/A';
  const convertedRevenueToUSD = convertToUSD(revenue);
  const convertedBudgetToUSD = convertToUSD(budget);

  const moviePrimaryDetailsItems: MediaPrimaryDetailsItem[] = [
    {
      label: 'Release date',
      data: releaseDate,
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      label: 'Status',
      data: status,
      icon: <AddTaskOutlinedIcon />,
    },
    {
      label: 'Budget',
      data: convertedBudgetToUSD,
      icon: <AttachMoneyOutlinedIcon />,
    },
    {
      label: 'Box Office',
      data: convertedRevenueToUSD,
      icon: <SavingsOutlinedIcon />,
    },
    {
      label: 'Language',
      data: spokenLanguage,
      icon: <GTranslateOutlinedIcon />,
    },
    {
      label: 'Country',
      data: productionCountry,
      icon: <PublicOutlinedIcon />,
    },
  ];

  return (
    <BlockWrapper title="Movie Details">
      {moviePrimaryDetailsItems.map(({ label, data, icon }: MediaPrimaryDetailsItem) => (
        <MediaItemList label={label} data={data} icon={icon} key={label} />
      ))}
    </BlockWrapper>
  );
}
