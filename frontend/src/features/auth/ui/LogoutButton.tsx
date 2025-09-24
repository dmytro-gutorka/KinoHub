import { Button } from '@mui/material';
import { logout } from '@features/auth/services/logout';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/selectors';
import { useNavigate } from 'react-router';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
  }

  return <>{isAuthenticated && <Button onClick={handleLogout}>Logout</Button>}</>;
}
