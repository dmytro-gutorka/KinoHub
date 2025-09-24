import { IUserProfile } from '@features/profile/types';
import { Avatar, Badge, Container, Stack, Typography, useTheme } from '@mui/material';
import BackgroundBanner from '@shared/ui/BackgroundBanner';
import ProfileUpdateModal from '@features/profile/ui/ProfileUpdateModal';

interface ProfileHeaderProps {
  userProfile: IUserProfile;
}

export default function ProfileHeader({ userProfile }: ProfileHeaderProps) {
  const theme = useTheme();

  const { avatarUrl, firstName, lastName, country, city, bio, social } = userProfile;

  return (
    <Stack position="relative" py={10} px={5}>
      <BackgroundBanner imgURL="s" />
      <Container maxWidth="md">
        <Stack>
          <Stack direction="row" gap={6} alignItems="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar
                alt="User avatar"
                src="/static/images/avatar/1.jpg"
                sx={{
                  width: 100,
                  height: 100,
                  outline: `${theme.palette.transparentGrey03} solid 3px`,
                }}
              />
            </Badge>

            <Stack gap={2}>
              <Stack>
                <Typography variant="h5">
                  {firstName} {lastName}
                </Typography>
                {/*<Typography variant="h6">@dima_gutorka</Typography>*/}
              </Stack>
              <Typography variant="body1">
                {bio}
                Passionate movie enthusiast and TV series binge-watcher. Love discovering hidden
                gems and discussing plot twists. Always up for a good recommendation!
              </Typography>
              <Stack component="ul" direction="row" gap={2}>
                <Stack component="li">
                  <Typography variant="subtitle1">
                    {country}, {city}
                  </Typography>
                </Stack>
                <Stack component="li">
                  <Typography variant="subtitle1">Joined March 2022</Typography>
                </Stack>
                {social?.website && (
                  <Stack component="li">
                    <Typography variant="subtitle1">https://alexmoviereviews.com</Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>
            <ProfileUpdateModal />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
