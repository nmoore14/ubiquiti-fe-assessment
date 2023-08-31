import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeviceParams } from '../types'
import { RootState, useAppDispatch, setSelectedDevice, selectDeviceById } from '../store'
import leftArrow from '../assets/icons/left-arrow.svg'

export default function DeviceDetails() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentDevice = useSelector((state: RootState) => state.devices.selectedDevice);

  const { id } = useParams<DeviceParams>()

  if (id) {
    dispatch(setSelectedDevice(id));
  }

  const selectedDevice = useSelector(selectDeviceById(currentDevice));
  console.log(selectedDevice)

  return (
    <div className='flex flex-col justify-start items-center deviceDetails'>
      <div className='flex flex-row nowrap justify-between items-center detailActions'>
        <div className='actionsLeft'>
          <button
            className='flex flex-row justify-between items-center btn backBtn'
            onClick={() => navigate('/')}
          >
            <img src={ leftArrow } alt='Back arrow' />
            Back
          </button>
        </div>
        <div className='actionsRight'>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center details'>
      </div>
    </div>

  )
}
