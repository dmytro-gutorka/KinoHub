import { Stack, Typography } from '@mui/material';
import MediaCardBrief from '@features/media/ui/MediaCardBrief';
import { MediaType } from '@shared/types/generalTypes';

interface MediaSectionProps {
  sectionTitle: string;
  mediaList: any[];
  mediaType: MediaType;
}

const MediaSection = ({ sectionTitle, mediaList, mediaType }: MediaSectionProps) => {
  return (
    <Stack component="section" gap={4}>
      <Typography variant="h5" children={sectionTitle} />
      <Stack direction="row" flexWrap="wrap" rowGap={9} columnGap={6}>
        {mediaList.map((mediaItem) => (
          <MediaCardBrief key={mediaItem.id} mediaItem={mediaItem} mediaType={mediaType} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MediaSection;
