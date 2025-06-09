import { Link as RoutLink } from 'react-router';
import Link from '@mui/material/Link';

const RouterLink = ({ children, to }) => {
  return (
    <Link component={RoutLink} to={to}>
      {children}
    </Link>
  );
};

export default RouterLink;
