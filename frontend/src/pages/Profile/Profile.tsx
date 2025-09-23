import { Container } from '@mui/material';
import ProfileSingleStatsList from '@features/profile/ui/ProfileSingleStatsList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import ProfileFavoriteGenres from '@features/profile/ui/ProfileFavoriteGenres';

export default function Profile() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats();

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <Container maxWidth="md">
      <ProfileSingleStatsList userMediaStats={userMediaStats} />
      <ProfileFavoriteGenres userMediaStats={userMediaStats} />
    </Container>
  );
}
