import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import getEpisodeListActions from '@shared/api/kinohub/services/episode/getEpisodeActionList';
import createEpisodeList from '@shared/api/kinohub/services/episode/createEpisodeList';
import { AxiosError } from 'axios';

export default function useGetOrCreateEpisodeActionList(
  tvShowId: number,
  seasonNumber: number,
  episodeList: any
) {
  const queryClient = useQueryClient();

  const { data: episodeActionList } = useQuery<Array<EpisodeEntity>>({
    queryKey: ['episodeActionList', tvShowId, seasonNumber],
    queryFn: async () => {
      try {
        return await getEpisodeListActions(tvShowId, seasonNumber);
      } catch (err: AxiosError) {
        if (err.response?.status === 404) {
          const createdEpisodeActionsList = await createEpisodeList(
            tvShowId,
            seasonNumber,
            episodeList?.length
          );
          queryClient.setQueryData(
            ['episodeActionList', tvShowId, seasonNumber],
            createdEpisodeActionsList
          );

          return createdEpisodeActionsList;
        }
        throw err;
      }
    },
    staleTime: 0,
    retry: false,
    enabled: !!episodeList,
  });

  return {
    episodeActionList: episodeActionList || [],
  };
}
