import { Action } from '@shared/types/generalTypes';
import { isAxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import createEpisodeAction from '@shared/api/kinohub/services/episode/createEpisodeAction';
import updateEpisodeAction from '@shared/api/kinohub/services/episode/updateEpisodeAction';

export default function useUpsertEpisodeAction(tvShowId: number, season: number, episode: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (action: Action) => {
      try {
        return await updateEpisodeAction(tvShowId, season, episode, action);
      } catch (error: unknown) {
        if (isAxiosError(error) && error.status === 409)
          return await createEpisodeAction(tvShowId, season, episode, action);
        else throw error;
      }
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['episodesActions', tvShowId, season] }),
  });
}
