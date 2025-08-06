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
    <Stack component="section" mt={10}>
      <Typography variant="h5" component="h2" fontWeight="700" lineHeight="2">
        {sectionTitle}
      </Typography>
      <Stack direction="row" flexWrap="wrap" rowGap={9} columnGap={6}>
        {mediaList.map((mediaItem) => (
          <MediaCardBrief key={mediaItem.id} mediaItem={mediaItem} mediaType={mediaType} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MediaSection;
