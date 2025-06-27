import { Button } from '@mui/material';
import LabelWithIcon from '../LabelWithIcon';

const ButtonList = ({ items }) => {
  return (
    <>
      {items.map(({ data, icon, onClick }, index) => (
        <Button onClick={onClick} key={index}>
          <LabelWithIcon key={index} data={data}>
            {icon}
          </LabelWithIcon>
        </Button>
      ))}
    </>
  );
};

export default ButtonList;
