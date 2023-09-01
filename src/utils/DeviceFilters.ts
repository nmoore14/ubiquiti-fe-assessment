import { IDevice, IDevices } from "../types"

function getUniqueProductLine<String>(array: IDevices): IDevice[keyof IDevice][] {
  const uniqueValues: Set<IDevice[keyof IDevice]> = new Set();

  for (const item of array) {
    uniqueValues.add(item.line.name);
  }

  return Array.from(uniqueValues);
}

export default getUniqueProductLine
