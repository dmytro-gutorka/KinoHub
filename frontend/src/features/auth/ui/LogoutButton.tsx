import { Button } from '@mui/material';
import { logout } from '@features/auth/model/services/logout';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return <>{isAuthenticated && <Button onClick={() => dispatch(logout())}>Logout</Button>}</>;
}
