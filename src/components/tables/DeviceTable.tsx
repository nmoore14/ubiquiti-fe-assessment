import * as React from 'react'
import SearchBar from './elements/SearchBar'
import listView from '../../assets/icons/list-view.svg'
import gridView from '../../assets/icons/grid-view.svg'

type Device = {
  sysids: string[],
  icon: object,
  line: object,
  sysid: string,
  guids: string[],
  uisp: object,
  btle: object,
  id: string,
  product: object,
  shortname: string[],
  triplets: object[],
}

export default function DeviceTable() {
  const [devices, setDevices] = React.useState({})

  React.useEffect(() => {
    fetch("https://static.ui.com/fingerprint/ui/public.json")
      .then((response) => response.json())
      .then((data) => {
        setDevices(data.devices);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='flex flex-row nowrap justify-between tableActions'>
      <div className='flex flex-row nowrap items-center tableSearch'>
        <SearchBar />
        <span className='muted'> { Object.keys(devices).length } devices </span>
      </div>
      <div className='flex flex-row nowrap justify-center items-center actions'>
        <img src={ listView } alt='List view icon' />
        <img src={ gridView } alt='Grid view icon' />
        <h3>Filter</h3>
      </div>
    </div>
  )
}
