import * as React from 'react'
import SearchBar from './elements/SearchBar'
import ActionButtonGroup from './elements/ActionButtonGroup'

type Icon = {
  id: string,
  resolutions: string[],
}

type Line = {
  name: string,
  id: string,
}

type Product = {
  abbrev: string,
  name: string,
}

interface Device {
  sysids: string[];
  icon: Icon;
  line: Line;
  sysid: string;
  guids: string[];
  uisp: object;
  btle: object;
  id: string;
  product: Product;
  shortname: string[];
  triplets: object[];
}

interface IDevices extends Array<Device>{}

export default function DeviceTable() {
  const [devices, setDevices] = React.useState<IDevices>([])

  const handleClick = () => {
    console.log('Button clicked')
  }

  const handleProductDetails = (device:Device) => {
    console.log(device)
  }

  React.useEffect(() => {
    fetch("https://static.ui.com/fingerprint/ui/public.json")
      .then((response) => response.json())
      .then((data) => {
        setDevices(data.devices);
      })
      .catch((error) => console.log(error));
  }, []);

  const deviceTableItems = devices.map((device, index) =>
    <tr key={ index }
      onClick={() => handleProductDetails(device) }
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
          <button>Filter</button>
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
