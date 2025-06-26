import { Box, List, ListItem, Typography, useTheme } from '@mui/material';

const MediaProductionCompaniesBlock = ({ companies }) => {
  const theme = useTheme();

  return (
    <>
      {companies.length > 0 && (
        <Box borderRadius={2.5} padding={4} border={theme.customComponents.border}>
          <Typography variant="h5" component="h3">
            Production companies
          </Typography>
          <List>
            {companies.map(({ id, name }) => (
              <ListItem key={id}>{name}</ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};
export default MediaProductionCompaniesBlock;
