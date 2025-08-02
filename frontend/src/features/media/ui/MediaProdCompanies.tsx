import { List, ListItem } from '@mui/material';
import { MediaProdCompaniesProps } from '@features/media/model/mediaTypes';
import { MediaContentBlock } from '@features/media';

export default function MediaProdCompanies({ companies }: MediaProdCompaniesProps) {
  return (
    <>
      {companies.length > 0 && (
        <MediaContentBlock blockTitle="Production companies">
          <List>
            {companies.map(({ id, name }) => (
              <ListItem key={id}>{name}</ListItem>
            ))}
          </List>
        </MediaContentBlock>
      )}
    </>
  );
}
