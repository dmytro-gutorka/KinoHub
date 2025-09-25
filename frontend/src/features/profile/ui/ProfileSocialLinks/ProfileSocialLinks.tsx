import { SocialLinks } from '@features/profile/types';
import { ReactNode } from 'react';
import { Box, List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ColorfulOutlinedInstagramIcon from '@shared/icons/ColorfullOurlinedInstagramIcon';
import BlockWrapper from '@shared/ui/BlockWrapper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ColorfulOutlinedLinkedinIcon from '@shared/icons/ColorfulOutlinedLinkedinIcon';
import ColorfulOutlinedTelegramIcon from '@shared/icons/ColorfulOutlinedTelegramIcon';
import useProfileUpdateForm from '@features/profile/hooks/useProfileUpdateForm';
import ProfileUpdateSocialsModal from '@features/profile/ui/ProfileSocialLinkUpdateModal';

interface ProfileSocialLinksProps {
  socialLinks: SocialLinks;
}

export default function ProfileSocialLinks({ socialLinks }: ProfileSocialLinksProps) {
  const socials: { icon: ReactNode; link: string }[] = [
    {
      icon: <ColorfulOutlinedInstagramIcon />,
      link: socialLinks?.instagram ?? 'Add your instagram to be displayed here',
    },
    {
      icon: <ColorfulOutlinedLinkedinIcon />,
      link: socialLinks?.linkedin ?? 'Add your linkedin to be displayed here',
    },
    {
      icon: <ColorfulOutlinedLinkedinIcon />,
      link: socialLinks?.telegram ?? 'Add your telegram to be displayed here',
    },
  ];

  return (
    <BlockWrapper title="Social Links" titleSizeVariant="body2" position="relative">
      <Box position="absolute" right={20} top={30}>
        <ProfileUpdateSocialsModal />
      </Box>
      <List>
        {socials.map(({ icon, link }) => (
          <ListItem key={link}>
            <ListItemIcon sx={{ minWidth: 35 }}>{icon}</ListItemIcon>
            <ListItemText primary={link} slotProps={{ primary: { sx: { fontWeight: 500 } } }} />
          </ListItem>
        ))}
      </List>
    </BlockWrapper>
  );
}
