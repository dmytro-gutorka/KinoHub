import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getTmdbMediaDetails from '@shared/api/tmdb/services/getTmdbMediaDetails';
import getWatchedEpisodesCount from '@shared/api/kinohub/services/episode/getWatchedEpisodesCount';

export default function useTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  const queryKeyWatchedEpisodes = ['watchedEpisodesPerSeason', mediaId];
  const queryKeyTmdbMediaDetails = ['tmdbMediaDetails', mediaType, mediaId];

  const { data: tmdbMediaData, isLoading: isTmdbMediaLoading } = useQuery({
    queryKey: queryKeyTmdbMediaDetails,
    queryFn: () => getTmdbMediaDetails(mediaId, mediaType),
  });

  // const { data: test } = useQuery({
  //   queryKey: queryKeyWatchedEpisodes,
  //   queryFn: () => {
  //     return getWatchedEpisodesCount(mediaId);
  //   },
  //   enabled: mediaType === 'tv',
  // });
  //
  // console.log(tmdbMediaData);

  return {
    tmdbMediaData,
    isTmdbMediaLoading,
  };
}
