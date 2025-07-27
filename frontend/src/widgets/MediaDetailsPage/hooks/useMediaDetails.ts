import { useQuery, useMutation } from '@tanstack/react-query';
import { getMedia } from '@shared/api/kinohub/services/media/getMedia';
import { createMedia } from '@shared/api/kinohub/services/media/createMedia';
import { updateMedia } from '@shared/api/kinohub/services/media/updateMedia';
import { MediaDetails, MediaType } from '@shared/types/generalTypes';
import { useEffect, useState } from 'react';

export default function useEnsureMediaDetails(mediaId: number, mediaType: MediaType) {
  const [finalMedia, setFinalMedia] = useState<MediaDetails | null>(null);

  const {
    data: existingMedia,
    error: fetchError,
    isLoading: isFetching,
  } = useQuery({
    queryKey: ['mediaDetails', mediaId],
    queryFn: () => getMedia(mediaId),
    retry: false,
  });

  const { mutate: create, isPending: isCreating } = useMutation({
    mutationFn: () => createMedia(mediaId, mediaType),
    onSuccess: (createdMedia) => {
      setFinalMedia(createdMedia);
    },
  });

  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: () => updateMedia(mediaId),
    onSuccess: (updatedMedia) => {
      setFinalMedia(updatedMedia);
    },
  });

  useEffect(() => {
    if (fetchError) create();
    if (existingMedia) update();
  }, [fetchError, existingMedia]);

  return {
    media: finalMedia ?? existingMedia,
    isLoading: isFetching || isCreating || isUpdating,
  };
}
