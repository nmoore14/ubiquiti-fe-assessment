import { IDevice, IDevices } from "../types"

export function getUniqueProductLine(array: IDevices): IDevice[keyof IDevice][] {
  const uniqueValues: Set<IDevice[keyof IDevice]> = new Set();

  for (const item of array) {
    uniqueValues.add(item.line.name);
  }

  return Array.from(uniqueValues);
}

export function filterDevices(devices: IDevice[], filters: Array<String>): IDevice[] {
  const filteredDevices = devices.filter((device:IDevice) => {
    return filters.includes(device.line.name)
  })

  return filteredDevices
}

