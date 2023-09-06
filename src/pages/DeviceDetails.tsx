import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeviceParams } from '../types'
import { RootState, useAppDispatch, setSelectedDevice, selectDeviceById } from '../store'
import NavButtons from '../components/details/NavButtons'
import leftArrow from '../assets/icons/left-arrow.svg'

export default function DeviceDetails() {
  const [showJson, setShowJson] = React.useState(false)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentDevice = useSelector((state: RootState) => state.devices.selectedDevice);

  const { id } = useParams<DeviceParams>()

  if (id) {
    dispatch(setSelectedDevice(id));
  }

  const selectedDevice = useSelector(selectDeviceById(currentDevice));
  console.log(selectedDevice)

  const prevDevice = () => {
    console.log('Previous Device')
  }

  const nextDevice = () => {
    console.log('Next Device')
  }

  const toggleJson = () => {
    setShowJson(!showJson)
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
          <div className='deviceDetailsImg'>
            <img src={ `https://static.ui.com/fingerprint/ui/icons/${selectedDevice?.icon.id}_${selectedDevice?.icon.resolutions[4][0]}x${selectedDevice?.icon.resolutions[4][1]}.png` } alt={ `Image of ${selectedDevice?.product.name}` } />
          </div>
          <div className='deviceDetailsDisplay'>
            <h3>{ selectedDevice?.product.name }</h3>
            <p>{ selectedDevice?.line.name }</p>
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
                  <td className='deviceDetail'>{ selectedDevice?.line.name }</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td className='deviceDetail'>{ selectedDevice?.line.id }</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td className='deviceDetail'>{ selectedDevice?.product.name }</td>
                </tr>
                <tr>
                  <td>Short Name</td>
                  <td className='deviceDetail'>{ selectedDevice?.shortnames[0]}</td>
                </tr>
                <tr>
                  <td>Max. Power</td>
                  <td className='deviceDetail'>{ selectedDevice?.shortnames[0]}</td>
                </tr>
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
