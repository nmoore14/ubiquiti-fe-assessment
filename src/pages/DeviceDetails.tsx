import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeviceParams, Icon, Radio } from '../types'
import {
  RootState,
  useAppDispatch,
  setSelectedDevice,
  selectDeviceById,
  selectDeviceIndexById,
  selectDeviceIdByIndex,
  getDevicesLength
} from '../store'
import NavButtons from '../components/buttons/NavButtons'
import leftArrow from '../assets/icons/left-arrow.svg'

export default function DeviceDetails() {
  const [showJson, setShowJson] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const devicesLength =  useSelector(getDevicesLength())
  const currentDevice = useSelector((state: RootState) => state.devices.selectedDevice)
  const selectedDeviceIndex = useSelector(selectDeviceIndexById(currentDevice))
  const selectedDevice = useSelector(selectDeviceById(currentDevice))
  const { id } = useParams<DeviceParams>()

  if (id) {
    dispatch(setSelectedDevice(id))
  }

  const previousIndex = selectedDeviceIndex === 0 ? devicesLength - 1 : selectedDeviceIndex - 1
  let previousDeviceId:string = ''
  if (previousIndex >= 0) {
    previousDeviceId = useSelector(selectDeviceIdByIndex(previousIndex))
  }

  const nextIndex = selectedDeviceIndex === devicesLength - 1 ? 0 : selectedDeviceIndex + 1
  let nextDeviceId:string = ''
  if (nextIndex < devicesLength) {
    nextDeviceId = useSelector(selectDeviceIdByIndex(nextIndex))
  }

  const prevDevice = () => {
    if (previousIndex >= 0) {
      navigate(`/details/${previousDeviceId}`)
    }
  };

  const nextDevice = () => {
    if (nextIndex < devicesLength) {
      navigate(`/details/${nextDeviceId}`)
    }
  };

  const toggleJson = () => {
    setShowJson(!showJson)
  }

  const getLargestIcon = (icon:Icon) => {
    const resolutionsLast:number = icon.resolutions.length - 1

    return (
      <img src={ `https://static.ui.com/fingerprint/ui/icons/${selectedDevice?.icon.id}_${selectedDevice?.icon.resolutions[resolutionsLast][0]}x${selectedDevice?.icon.resolutions[resolutionsLast][1]}.png` } alt={ `Image of ${selectedDevice?.product.name}` } />
    )
  }

  const getKeyValue = (radios:Radio[], key:string) => {
    for (const radio in radios) {
      for (const item in radios[radio]) {
        if (item === key) {
          return radios[radio][item]
        }
      }
    }
  }

  const buildRadioEntry = (radios:Radio[], key:string) => {
    let keyDisplay:string = ''
    let value = ''
    switch (key) {
      case 'maxPower': {
        keyDisplay = 'Max Power'
        value = `${getKeyValue(radios, 'maxPower')} W`
        break
      }
      case 'maxSpeedMegabitsPerSecond': {
        keyDisplay = 'Speed'
        value = `${getKeyValue(radios, 'maxSpeedMegabitsPerSecond')} Mbps`
        break
      }
      default: {
        keyDisplay = 'n/a'
        break
      }
    }
    return ( <tr><td>{ keyDisplay }</td><td className='deviceDetail'>{ value }</td></tr> )
  }

  return (
    <div className='flex flex-col justify-start items-center deviceDetails'>
      <div className='flex flex-row nowrap justify-between items-center detailActions'>
        <div className='actionsLeft'>
          <button
            className='btn backBtn'
            onClick={() => navigate('/')}
          >
            <img src={ leftArrow } alt='Back arrow' />
            Back
          </button>
        </div>
        <div className='actionsRight'>
          <NavButtons onClickButton1={ prevDevice } onClickButton2={ nextDevice } />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center details'>
        <div className='device'>
          <div className='flex flex-col nowrap justify-center items-center deviceDetailsImg'>
            { getLargestIcon(selectedDevice!.icon) }
          </div>
          <div className='deviceDetailsDisplay'>
            <h3>{ selectedDevice!.product.name }</h3>
            <p>{ selectedDevice!.line.name }</p>
            <table className='deviceDetailsInfo'>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product Line</td>
                  <td className='deviceDetail'>{ selectedDevice!.line.name }</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td className='deviceDetail'>{ selectedDevice!.line.id }</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td className='deviceDetail'>{ selectedDevice!.product.name }</td>
                </tr>
                <tr>
                  <td>Short Name</td>
                  <td className='deviceDetail'>{ selectedDevice!.shortnames[0]}</td>
                </tr>
                { selectedDevice?.unifi.hasOwnProperty('network') && buildRadioEntry(selectedDevice.unifi.network.radios, 'maxPower') }
                { selectedDevice?.unifi.hasOwnProperty('network') && buildRadioEntry(selectedDevice.unifi.network.radios, 'maxSpeedMegabitsPerSecond') }
                { selectedDevice?.unifi.hasOwnProperty('numberOfPorts') && <tr>
                  <td>Number of Ports</td>
                  <td className='deviceDetail'>{ selectedDevice?.unifi.numberOfPorts }</td>
                </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='deviceDetailsExtra'>
        <button
          className='btn btnGhostPrimary'
          onClick={ toggleJson }
        >
          See All Details as JSON
        </button>
        {showJson && (
          <div className='json-popup'>
            <pre>{JSON.stringify(selectedDevice, null, 2)}</pre>
            <button className='btn btnGhost' onClick={toggleJson}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>

  )
}
