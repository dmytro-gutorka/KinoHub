import { Stack } from '@mui/material';
import useActivityFeed from '@features/profile/hooks/useActivityFeed';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function ProfileActivityFeed() {
  const { data: activityFeed, isSuccess } = useActivityFeed();

  if (!isSuccess) return <div>Loading...</div>;

  console.log(activityFeed);
  return (
    <BlockWrapper title="Activity Feed" isBoxShadow={false} titleSizeVariant="body2">
      <Stack>
        {activityFeed.map((activityItem) => (
          <Stack key={activityItem.id}>
            {activityItem.title}: {activityItem.activityType}
          </Stack>
        ))}
      </Stack>
    </BlockWrapper>
  );
}
