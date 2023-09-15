import { IDevice } from "../../types";

interface DeviceCardProps {
  device: IDevice;
  deviceIndex: number;
  deviceDetails: (id:string) => void;
}

export default function DeviceCard({ device, deviceIndex, deviceDetails }: DeviceCardProps) {
  return (
    <div className='deviceCard' key={ deviceIndex } onClick={ () => deviceDetails(device.id) }>
      <div className='deviceLineTag'>
        <p className='tag'>{ device.line.name }</p>
      </div>
      <div className='deviceImage'>
        <img
          className='productImage'
          src={ `https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_${device.icon.resolutions[2][0]}x${device.icon.resolutions[2][1]}.png` }
          alt={ `Image of ${device.product.name}` }
        />
      </div>
      <div className='deviceInfo'>
        <h2>{ device.product.name }</h2>
        <p className='muted'>{ device.shortnames[0] }</p>
      </div>
    </div>
  )

}
