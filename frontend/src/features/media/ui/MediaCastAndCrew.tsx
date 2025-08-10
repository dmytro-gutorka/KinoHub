import { MediaCastAndCrewProps } from '@features/media/model/types/mediaTypes';
import { Stack } from '@mui/material';
import MediaContentBlock from '@shared/ui/MediaContentBlock';
import MediaActorCard from '@features/media/ui/MediaActorCard';

export default function MediaCastAndCrew({ cast }: MediaCastAndCrewProps) {
  return (
    <MediaContentBlock blockTitle="Cast & Crew">
      <Stack direction="row" flexWrap="wrap" gap={4}>
        {cast.slice(0, 10).map((actor) => (
          <MediaActorCard actor={actor} key={actor.id} />
        ))}
      </Stack>
    </MediaContentBlock>
  );
}
