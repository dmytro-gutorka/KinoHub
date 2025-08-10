import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getCommentList from '@shared/api/kinohub/services/comments/getCommentList';
import { MediaContentBlock } from '@features/media';
import CommentList from '@features/comments/ui/CommentList';

interface MediaCommentsProps {
  mediaId: number;
  mediaType: MediaType;
}

export default function MediaComments({ mediaId, mediaType }: MediaCommentsProps) {
  const { data: commentList, isLoading } = useQuery({
    queryFn: () => getCommentList(mediaId, mediaType),
    queryKey: ['comments', mediaId, mediaType],
  }); // TRO to move to Comment List ???

  if (isLoading) return <div>Loading...</div>;

  console.log(commentList);

  return (
    <MediaContentBlock blockTitle={`Reviews (${commentList?.length || 0})`}>
      <CommentList commentList={commentList} />
    </MediaContentBlock>
  );
}
