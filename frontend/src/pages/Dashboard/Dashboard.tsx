import { IUser } from '@features/auth/model/authTypes';
import { Container, Stack } from '@mui/material';
import { selectUserMetaData } from '@features/auth/model/selectors';
import { useSelector } from 'react-redux';
import PageWrapper from '@shared/ui/PageWrapper';
import DashboardMainStats from '@features/dashboard/ui/DashboardMainStats';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import DashboardTopGenres from '@features/dashboard/ui/DashboardTopGenres';
import DashboardQuickStats from '@features/dashboard/ui/DashboardQuickStats';

const Dashboard = () => {
  const userMeta: IUser | null = useSelector(selectUserMetaData);

  const { data, isSuccess } = useUserMediaStats(userMeta?.id);

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <Container maxWidth="lg">
      <PageWrapper>
        <Stack spacing={10}>
          <DashboardMainStats userMediaStats={data} />
          <Stack
            direction={{ md: 'column-reverse', lg: 'row' }}
            justifyContent="space-between"
            spacing={3}
          >
            <DashboardTopGenres userMediaStats={data} />
            <DashboardQuickStats userMediaStats={data} />
          </Stack>
        </Stack>
      </PageWrapper>
    </Container>
  );
};
export default Dashboard;
