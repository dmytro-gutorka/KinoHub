import { Box, Container } from '@mui/material';
import ProfileSingleStatsList from '@features/profile/ui/ProfileSingleStatsList';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import ProfileFavoriteGenres from '@features/profile/ui/ProfileFavoriteGenres';
import ProfileHeader from '@features/profile/ui/ProfileHeader';
import useUserProfile from '@features/profile/hooks/useUserProfile';
import ProfileSocialLinks from '@features/profile/ui/ProfileSocialLinks/ProfileSocialLinks';

export default function Profile() {
  const { data: userMediaStats, isSuccess: isUserStatsSuccess } = useUserMediaStats();
  const { data: userProfile, isSuccess: isUserProfileSuccess } = useUserProfile();

  if (!isUserStatsSuccess || !isUserProfileSuccess) return <div>Loading...</div>;

  return (
    <>
      <Box component="main">
        <ProfileHeader userProfile={userProfile} />
        <Container maxWidth="md">
          <ProfileSingleStatsList userMediaStats={userMediaStats} />
          <ProfileFavoriteGenres userMediaStats={userMediaStats} />
          <ProfileSocialLinks socialLinks={userProfile?.social} />
        </Container>
      </Box>
    </>
  );
}
