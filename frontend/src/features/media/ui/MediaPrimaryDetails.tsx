import { TmdbMovieDetails } from '@entities/types/tmdbEntities';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function MoviePrimaryDetails({
  tmdbMediaData,
}: {
  tmdbMediaData: TmdbMovieDetails;
}) {
  const {
    production_countries: country,
    budget,
    revenue,
    status,
    release_date: releaseDate,
    spoken_languages: language,
  } = tmdbMediaData;

  interface MediaPrimaryDetailsItem {}

  const moviePrimaryDetailsItems: MediaPrimaryDetailsItem[] = [{}];

  return (
    <BlockWrapper blockTitle="Movie Details">
      {/*<MediaItemList label="Release date" data={releaseDate} />*/}
      {/*<MediaItemList label="Status" data={status} />*/}

      {/*{!!budget && <MediaItemList label="Budget" data={convertToUSD(budget)} />}*/}
      {/*{!!revenue && <MediaItemList label="Box Office" data={convertToUSD(revenue)} />}*/}

      {/*<MediaItemList label="Status" data={status} />*/}
      {/*<MediaItemList label="Language" data={language?.[0]?.english_name || 'N/A'} />*/}
      {/*<MediaItemList label="Country" data={country?.[0]?.name || 'Unknown'} />*/}
    </BlockWrapper>
  );
}
