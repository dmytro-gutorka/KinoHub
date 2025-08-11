import { MediaType } from '@shared/types/generalTypes';
import { useQuery } from '@tanstack/react-query';
import getCommentList from '@shared/api/kinohub/services/comments/getCommentList';
import { MediaContentBlock } from '@features/media';
import CommentList from '@features/comments/ui/CommentList';
import CommentForm from '@features/comments/ui/CommentForm';

interface MediaCommentsProps {
  mediaId: number;
  mediaType: MediaType;
}

export default function MediaComments({ mediaId, mediaType }: MediaCommentsProps) {
  const { data: commentList, isLoading } = useQuery({
    queryFn: () => getCommentList(mediaId, mediaType),
    queryKey: ['comments', mediaId, mediaType],
  }); // TRY to move to Comment List ???

  // убрать пароль из запроса на беке

  if (isLoading) return <div>Loading...</div>;

  console.log(commentList);

  return (
    <MediaContentBlock blockTitle={`Reviews (${commentList?.length || 0})`}>
      <CommentForm mediaId={mediaId} mediaType={mediaType} />
      <CommentList commentList={commentList} />
    </MediaContentBlock>
  );
}
