import { Button } from '@mui/material';
import { logout } from '@features/auth/services/logout';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/selectors';
import { useNavigate } from 'react-router';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      {isAuthenticated && (
        <Button startIcon={<LogoutIcon />} variant="outlined" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </>
  );
}
