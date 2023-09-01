import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../store'
import { getUniqueProductLine } from '../../utils'
import SearchBar from './elements/SearchBar'
import ActionButtonGroup from './elements/ActionButtonGroup'
import FilterDropdown from '../details/FilterDropdown'

export default function DeviceTable() {
  const navigate = useNavigate()

  const devices = useSelector((state: RootState) => state.devices.devices);

  const handleClick = () => {
    console.log('Button clicked')
  }

  const handleProductDetails = (deviceId:string) => {
    navigate(`/details/${deviceId}`)
  }

  const productLines = getUniqueProductLine(devices)

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
    <div className='flex flex-col nowrap devices'>
      <div className='flex flex-row nowrap justify-between tableActions'>
        <div className='flex flex-row nowrap items-center tableSearch'>
          <SearchBar />
          <span className='muted'> { Object.keys(devices).length } devices </span>
        </div>
        <div className='flex flex-row nowrap justify-center items-center actions'>
          <ActionButtonGroup onClickButton1={ handleClick } onClickButton2={ handleClick } />
          <FilterDropdown items={ productLines } type='checkbox' onSelect={ handleClick } />
        </div>
      </div>
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
