import { useEffect, useRef } from 'react';
import { RouterProvider } from 'react-router';
import { useAppDispatch } from '@shared/hooks/redux';
import { checkAuth } from '@features/auth/model/services/checkAuth';
import { router } from '@app/router';

export default function App() {
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
