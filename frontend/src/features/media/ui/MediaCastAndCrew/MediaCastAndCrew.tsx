import { MediaCastAndCrewProps } from '@features/media/model/mediaTypes';
import { Stack } from '@mui/material';
import MediaContentBlock from '@features/media/ui/MediaContent';
import MediaActorCard from '@shared/ui/MediaActorCard';

export default function MediaCastAndCrew({ cast }: MediaCastAndCrewProps) {
  return (
    <MediaContentBlock blockTitle="Cast & Crew">
      <Stack direction="row" flexWrap="wrap" gap={4}>
        {cast.slice(0, 10).map((actor) => (
          <MediaActorCard actor={actor} />
        ))}
      </Stack>
    </MediaContentBlock>
  );
}
