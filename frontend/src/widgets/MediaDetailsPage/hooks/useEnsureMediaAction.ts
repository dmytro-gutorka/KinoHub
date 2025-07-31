import { MediaActionEntity } from '@shared/types/kinohubEntities';
import { MediaType } from '@shared/types/generalTypes';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getMediaAction from '@shared/api/kinohub/services/actions/getMediaAction';
import createMediaAction from '@shared/api/kinohub/services/actions/createMediaAction';

export default function useEnsureMediaAction(
  mediaId: number,
  mediaType: MediaType,
  options?: { enabled: boolean }
) {
  const [createdAction, setCreatedAction] = useState<null | MediaActionEntity>(null);

  const queryClient = useQueryClient();

  const {
    data: existingAction,
    error: fetchError,
    isLoading: isFetching,
  } = useQuery({
    queryKey: ['mediaAction', mediaType, mediaId],
    queryFn: () => getMediaAction(mediaId, mediaType),
    retry: false,
    enabled: options?.enabled,
    staleTime: 0,
  });

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: () => createMediaAction(mediaId, mediaType),
    onSuccess: (createdMedia: MediaActionEntity) => {
      setCreatedAction(createdMedia);
      queryClient.setQueryData(['mediaAction', mediaType, mediaId], createdMedia);
    },
  });

  useEffect(() => {
    if (fetchError && options?.enabled) create();
  }, [fetchError, options?.enabled]);

  return {
    isActionsLoading: isFetching || isCreating,
    mediaAction: existingAction ?? createdAction,
  };
}
