import { useNavigate } from 'react-router-dom'
import { IDevice } from '../../types'
import DeviceCard from './elements/DeviceCard'

interface DeviceGridProps {
  devices: IDevice[];
}

export default function DeviceGrid({ devices }: DeviceGridProps) {
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
