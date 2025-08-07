import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateEpisodeAction from '@shared/api/kinohub/services/episode/updateEpisodeAction';
import { MediaUserActions } from '@shared/types/generalTypes';

export default function useUpdateEpisodeAction(tvShowId: number, season: number, episode: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (action: MediaUserActions) =>
      updateEpisodeAction(tvShowId, season, episode, action),
    onMutate: async (action) => {
      await queryClient.cancelQueries({ queryKey: ['episodeAction', tvShowId, season, episode] });
      const prevData = queryClient.getQueryData<MediaUserActions>([
        'episodeAction',
        tvShowId,
        season,
        episode,
      ]);

      console.log(prevData);
      console.log(action);
      queryClient.setQueryData(['episodeAction', tvShowId, season, episode], {
        ...prevData,
        ...action,
      });
      return { prevData };
    },
    onError: (error, variables, context) =>
      queryClient.setQueryData(['episodeAction', tvShowId, season, episode], context.prevData),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['episodeAction', tvShowId, season, episode] }),
  });
}
