import { List, ListItem } from '@mui/material';
import { MediaProdCompaniesProps } from '@features/media/types/mediaTypes';
import BlockWrapper from '@shared/ui/BlockWrapper';

export default function MediaProdCompanies({ companies }: MediaProdCompaniesProps) {
  return (
    <>
      {companies.length > 0 && (
        <BlockWrapper title="Production companies" isBoxShadow={false}>
          <List>
            {companies.map(({ id, name }) => (
              <ListItem key={id}>{name}</ListItem>
            ))}
          </List>
        </BlockWrapper>
      )}
    </>
  );
}
