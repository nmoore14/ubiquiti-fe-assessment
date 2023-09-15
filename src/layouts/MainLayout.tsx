import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, fetchDevicesSuccess } from '../store'

import LayoutHeader from '../components/headers/LayoutHeader'

interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const dispatch = useAppDispatch();

  // This is going to live here for the time being
  // Once implemented into a large app, this can be added to the global store
  useEffect(() => {
    fetch("https://static.ui.com/fingerprint/ui/public.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchDevicesSuccess(data.devices));
      })
    .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div>
      <LayoutHeader pageTitle='Devices' authorName='Nick Moore' />
      <main>
        {children || <Outlet />}
      </main>
    </div>
  )
};
