import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState, toggleDeviceView, useAppDispatch } from '../store'
import { IDevice, ISearchItem } from '../types'
import { getUniqueProductLine, filterDevices, getProductNameList } from '../utils/DeviceFilters'
import SearchBar from '../components/tables/elements/SearchBar'
import ActionButtonGroup from '../components/tables/elements/ActionButtonGroup'
import FilterDropdown from '../components/details/FilterDropdown'
import DeviceTable from '../components/tables/DeviceTable'
import DeviceGrid from '../components/grid/DeviceGrid'

export default function Devices() {
  const [deviceFilter, setDeviceFilter] = React.useState<string[]>([])
  const [deviceDisplay, setDeviceDisplay] = React.useState<IDevice[]>([])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const devices = useSelector((state: RootState) => state.devices.devices)
  const showList = useSelector((state: RootState) => state.devices.displayList)

  const changeDeviceView = (showList:boolean) => {
    dispatch(toggleDeviceView(showList))
  }

  const handleProductDetails = (deviceId:string) => {
    navigate(`/details/${deviceId}`)
  }

  const handleDeviceFilter = (item:string) => {
    const itemIndex:number = deviceFilter.indexOf(item)
    let filters:Array<string> = [...deviceFilter]
    if (itemIndex < 0) {
      filters = [...deviceFilter, item]
      setDeviceFilter(filters)
    } else {
      filters.splice(itemIndex, 1)
      setDeviceFilter(filters)
    }
  }

  const resetFilters = () => {
    setDeviceFilter([])
  }

  const productLines = getUniqueProductLine(devices)
  const searchItems:ISearchItem[] = getProductNameList(devices)

  React.useEffect(() => {
    if (deviceFilter.length) {
      const filteredDevices = filterDevices(devices, deviceFilter)
      setDeviceDisplay(filteredDevices)
    } else {
      setDeviceDisplay(devices)
    }
  }, [deviceFilter, devices])

  return (
    <div className='flex flex-col nowrap devices'>
      <div className='fixed flex flex-row nowrap justify-between deviceActions'>
        <div className='flex flex-row nowrap items-center deviceSearch'>
          <SearchBar searchItems={ searchItems } searchSelect={ handleProductDetails }/>
          <span className='muted'> { Object.keys(deviceDisplay).length } devices </span>
        </div>
        <div className='flex flex-row nowrap justify-center items-center actions'>
          <ActionButtonGroup showDeviceList={ showList } onViewToggle={ changeDeviceView }/>
          <FilterDropdown items={ productLines } type='checkbox' onSelect={ handleDeviceFilter } onClickReset={ resetFilters } />
        </div>
      </div>
      { showList &&
        <DeviceTable devices={ deviceDisplay } />
      }

      { !showList &&
        <DeviceGrid devices={ deviceDisplay } />
      }
    </div>
  )
}
