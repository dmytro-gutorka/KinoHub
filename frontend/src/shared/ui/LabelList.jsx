import LabelWithIcon from './LabelWithIcon';
import { Stack } from '@mui/material';

export default function LabelList({ items }) {
  return (
    <Stack direction="row" spacing={4}>
      {items.map(({ data, icon }, index) => (
        <LabelWithIcon key={index} data={data}>
          {icon}
        </LabelWithIcon>
      ))}
    </Stack>
  );
}
