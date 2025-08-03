import { UserMediaActionEntity } from '@entities/types/kinohubEntities';
import { MediaType } from '@shared/types/generalTypes';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getUserMediaAction from '@shared/api/kinohub/services/userMediaActions/getUserMediaAction';
import createUserMediaAction from '@shared/api/kinohub/services/userMediaActions/createUserMediaAction';

export default function useGetOrCreateMediaAction(
  mediaId: number,
  mediaType: MediaType,
  options?: { enabled: boolean }
) {
  const [createdAction, setCreatedAction] = useState<null | UserMediaActionEntity>(null);

  const queryClient = useQueryClient();

  const {
    data: existingAction,
    error: fetchError,
    isLoading: isFetching,
  } = useQuery({
    queryKey: ['mediaAction', mediaType, mediaId],
    queryFn: () => getUserMediaAction(mediaId, mediaType),
    retry: false,
    enabled: options?.enabled,
    staleTime: 0,
  });

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: () => createUserMediaAction(mediaId, mediaType),
    onSuccess: (createdMedia: UserMediaActionEntity) => {
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
