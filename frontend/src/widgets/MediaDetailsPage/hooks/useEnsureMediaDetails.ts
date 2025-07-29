import { MediaType } from '@shared/types/generalTypes';
import { MediaDetails } from '@widgets/MediaDetailsPage/model/types';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { createMedia } from '@shared/api/kinohub/services/media/createMedia';
import { updateMedia } from '@shared/api/kinohub/services/media/updateMedia';
import { getMedia } from '@shared/api/kinohub/services/media/getMedia';

export default function useEnsureMediaDetails(mediaId: number, mediaType: MediaType) {
  const [finalMedia, setFinalMedia] = useState<MediaDetails | null>(null);

  const {
    data: existingMedia,
    error: fetchError,
    isLoading: isFetching,
    isSuccess: isFetchSuccess,
  } = useQuery({
    queryKey: ['mediaDetails', mediaType, mediaId],
    queryFn: () => getMedia(mediaId, mediaType),
    retry: false,
  });

  const {
    mutate: create,
    isPending: isCreating,
    isSuccess: isCreatingSuccess,
  } = useMutation({
    mutationFn: () => createMedia(mediaId, mediaType),
    onSuccess: (createdMedia) => setFinalMedia(createdMedia),
  });

  const {
    mutate: update,
    isPending: isUpdating,
    isSuccess: isUpdatingSuccess,
  } = useMutation({
    mutationFn: () => updateMedia(mediaId, mediaType),
    onSuccess: (updatedMedia) => setFinalMedia(updatedMedia),
  });

  useEffect(() => {
    if (fetchError) create();
    if (existingMedia) update();
  }, [fetchError, existingMedia]);

  return {
    mediaData: finalMedia ?? existingMedia,
    isMediaLoading: isFetching || isCreating || isUpdating,
    isMediaSuccess: isFetchSuccess || isCreatingSuccess || isUpdatingSuccess,
  };
}
