import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { IDevice } from '../../types'

interface DeviceTableProps {
  devices: IDevice[];
}

const DeviceTable:React.FC<DeviceTableProps> = ({ devices }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Button clicked')
  }

  const handleProductDetails = (deviceId:string) => {
    navigate(`/details/${deviceId}`)
  }

  const deviceTableItems = devices.map((device, index) =>
    <tr key={ index }
      onClick={() => handleProductDetails(device.id) }
    >
      <td className='iconCol'>
        <img src={ `https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${device.icon.resolutions[0][0]}x${device.icon.resolutions[0][1]}.png` } alt={ `Image of ${device.product.name}` } />
      </td>
      <td className='lineCol lineColItem'>{ device.line.name }</td>
      <td className='productNameCol productNameColItem'>{ device.product.name }</td>
    </tr>
  )

  return (
      <div className='devicesTable'>
        <table>
          <thead>
            <tr>
              <th className='iconCol'></th>
              <th className='lineCol'>Product Line</th>
              <th className='productNameCol'>Name</th>
            </tr>
          </thead>
          <tbody>
            { deviceTableItems }
          </tbody>
        </table>
      </div>
  )
}

export default DeviceTable
