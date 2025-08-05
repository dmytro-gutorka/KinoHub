import { Stack, Typography } from '@mui/material';
import MediaCardBrief from '../MediaCardBrief';

const MediaSection = ({ title, mediaList }) => {
  return (
    <Stack component="section" mt={10}>
      <Typography variant="h5" component="h2" fontWeight="700" lineHeight="2">
        {title}
      </Typography>
      <Stack direction="row" flexWrap="wrap" rowGap={9} columnGap={6}>
        {mediaList.map((mediaItem) => (
          <MediaCardBrief key={mediaItem.id} mediaItem={mediaItem} />
        ))}
      </Stack>
    </Stack>
  );
};

export default MediaSection;
