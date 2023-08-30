import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectDeviceById } from '../store'

type DeviceParams = {
  id: string,
}

export default function DeviceDetails() {
  const [currentDevice, setCurrentDevice] = useState('')
  const { id } = useParams<DeviceParams>()

  if (id && !currentDevice) {
    setCurrentDevice(id)
  }

  const selectedDevice = useSelector(selectDeviceById(currentDevice));
  console.log(selectedDevice)

  return (
    <div>
      <h1>Selected:</h1>
      <h2>{ selectedDevice?.product.name }</h2>
    </div>

  )
}
