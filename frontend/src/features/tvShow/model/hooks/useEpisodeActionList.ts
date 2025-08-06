import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import getEpisodeListActions from '@shared/api/kinohub/services/episode/getEpisodeActionList';
import createEpisodeList from '@shared/api/kinohub/services/episode/createEpisodeList';

export default function useEpisodeActionList(
  tvShowId: number,
  seasonNumber: number,
  episodeList: any
) {
  const [createdEpisodeActionList, setCreatedEpisodeActionList] = useState<Array<EpisodeEntity>>(
    []
  );
  const queryClient = useQueryClient();

  const { data: existingEpisodeActionList, isError } = useQuery({
    queryKey: ['episodeActionList', tvShowId, seasonNumber],
    queryFn: () => getEpisodeListActions(tvShowId, seasonNumber),
    staleTime: 0,
    retry: false,
    enabled: !!episodeList,
  });

  const { mutate: create } = useMutation({
    mutationFn: () => createEpisodeList(tvShowId, seasonNumber, episodeList?.length),
    onSuccess: (createdEpisodeActions: Array<EpisodeEntity>) => {
      setCreatedEpisodeActionList(createdEpisodeActions);
      queryClient.setQueryData(
        ['episodeActionList', tvShowId, seasonNumber],
        createdEpisodeActions
      );
    },
  });

  useEffect(() => {
    if (isError) create();
  }, [isError, create]);

  return {
    episodeActionList: existingEpisodeActionList || createdEpisodeActionList || [],
  };
}
