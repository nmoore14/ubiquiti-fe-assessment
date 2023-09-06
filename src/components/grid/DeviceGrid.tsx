import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { IDevice } from '../../types'
import DeviceCard from './elements/DeviceCard'

interface DeviceGridProps {
  devices: IDevice[];
}

const DeviceGrid:React.FC<DeviceGridProps> = ({ devices }) => {
  const navigate = useNavigate()

  const handleProductDetails = (deviceId:string) => {
    navigate(`/details/${deviceId}`)
  }

  return (
      <div className='devicesGrid'>
      {
        devices.map((device, index) =>
          <DeviceCard device={ device } deviceIndex={ index } deviceDetails={ handleProductDetails } />
        )
      }
      </div>
  )
}

export default DeviceGrid
