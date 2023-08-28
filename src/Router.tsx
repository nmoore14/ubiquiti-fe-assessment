import type { RouteObject } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import Devices from './pages/Devices';
import DeviceDetails from './pages/DeviceDetails';


const Router: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Devices />,
      },
      {
        path: '/details',
        element: <DeviceDetails />,
      },
    ],
  },
];

export default Router;
