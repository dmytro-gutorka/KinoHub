import { RouterProvider } from 'react-router';
import { useEffect } from 'react';
import { router } from '@app/router';
import { useAppDispatch } from '@shared/hooks/redux';
import { checkAuth } from '@features/auth/model/services/checkAuth';

export default function AppWrapper() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return <RouterProvider router={router} />;
}
