import * as React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, fetchDevicesSuccess } from '../store'

import LayoutHeader from '../components/LayoutHeader'

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  // This is going to live here for the time being
  // Once implemented into a large app, this can be added to the global store
  React.useEffect(() => {
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

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
