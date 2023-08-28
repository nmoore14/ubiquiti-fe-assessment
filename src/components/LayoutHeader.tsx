import * as React from 'react'
import ubiDefaultIcon from '../assets/ubi-default-icon.svg'

export default function LayoutHeader() {
  return (
    <div className="layoutHeader">
      <div className="flex flex-row nowrap justify-center items-center">
        <img src={ ubiDefaultIcon } alt='Ubiquiti Defualt Icon'/>
        <h3>Devices</h3>
      </div>
      <div>
        <h3>Nick Moore</h3>
      </div>
    </div>
  )
}
