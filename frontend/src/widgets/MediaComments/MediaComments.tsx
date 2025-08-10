import { MediaType } from '@shared/types/generalTypes';
import { MediaContentBlock } from '@features/media';
import CommentList from '@features/comments/ui/CommentList';

interface MediaCommentsProps {
  mediaId: number;
  mediaType: MediaType;
}

export default function MediaComments({ mediaId, mediaType }): MediaCommentsProps {
  return (
    <MediaContentBlock blockTitle="Reviews (999)">
      <CommentList />
    </MediaContentBlock>
  );
}
