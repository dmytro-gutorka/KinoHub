import { IUser } from '@features/auth/model/authTypes';
import { Stack } from '@mui/material';
import { selectUserMetaData } from '@features/auth/model/selectors';
import { useSelector } from 'react-redux';
import { MediaContentBlock } from '@features/media';
import PageWrapper from '@shared/ui/PageWrapper';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';

const Dashboard = () => {
  const userMeta: IUser | null = useSelector(selectUserMetaData);

  const { data, isSuccess } = useUserMediaStats(userMeta?.id);

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <PageWrapper>
      <Stack spacing={10}>
        <DashboardMainStats userMediaStats={data} />
        <MediaContentBlock blockTitle="Top Genres"></MediaContentBlock>
      </Stack>
    </PageWrapper>
  );
};
export default Dashboard;
