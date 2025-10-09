import BlockWrapper from '@shared/ui/BlockWrapper';
import { UserListItemDTO } from '@kinohub/schemas';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import React from 'react';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import stringToColor from '@shared/helpers/stringToColor';

interface PersonProps {
  person: UserListItemDTO;
}

export default function Person({ person }: PersonProps) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const fulNameInitials = fullNameToInitials(`${person.firstName} ${person.lastName}`);

  return (
    <BlockWrapper isBoxShadow={false}>
      <Avatar sx={{ bgcolor: stringToColor(fullName) }}>{fulNameInitials}</Avatar>
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography variant="body2" fontWeight={600}>
          {fullName}
        </Typography>
        {person.isEmailConfirmed && <Box>✔</Box>}
      </Stack>
    </BlockWrapper>
  );
}
