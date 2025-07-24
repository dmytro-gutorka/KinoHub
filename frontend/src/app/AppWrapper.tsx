import { RouterProvider } from 'react-router';
import { useEffect, useRef } from 'react';
import { router } from '@app/router';
import { useAppDispatch } from '@shared/hooks/redux';
import { checkAuth } from '@features/auth/model/services/checkAuth';

export default function AppWrapper() {
  const dispatch = useAppDispatch();
  const isDispatchedRef = useRef(false);

  useEffect(() => {
    if (!isDispatchedRef.current) {
      isDispatchedRef.current = true;
      dispatch(checkAuth());
    }
  }, []);

  return <RouterProvider router={router} />;
}
