import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getCommentList from '@shared/api/kinohub/services/comments/getCommentList';

export default function useComments(mediaId: number, mediaType: MediaType) {
  return useQuery({
    queryFn: () => getCommentList(mediaId, mediaType),
    queryKey: ['comments', mediaId, mediaType],
  });
}
