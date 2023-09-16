import { createHashRouter } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import Devices from './pages/Devices';
import DeviceDetails from './pages/DeviceDetails';


const Router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Devices />,
      },
      {
        path: '/details/:id',
        element: <DeviceDetails />,
      },
    ],
  },
])

export default Router;
