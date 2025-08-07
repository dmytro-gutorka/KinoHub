import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateEpisodeAction from '@shared/api/kinohub/services/episode/updateEpisodeAction';
import { MediaUserActions } from '@shared/types/generalTypes';

export default function useUpdateEpisodeAction(tvShowId: number, season: number, episode: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (action: Partial<MediaUserActions>) =>
      updateEpisodeAction(tvShowId, season, episode, action),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['episodeActionList', tvShowId, season] }),
  });
}
