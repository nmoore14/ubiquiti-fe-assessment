import { IDevice, IDevices } from "../types"

interface SearchItem {
  id: string;
  name: string;
  shortName: string;
  productIndex: number;
}

/**
 * @description Generate a list of unique product lines for filtering products
 * @param { IDevices } array - Array of devices
 * @returns { String[] } - String array of unique product lines
 */
export function getUniqueProductLine(array: IDevices): IDevice[keyof IDevice][] {
  const uniqueValues: Set<IDevice[keyof IDevice]> = new Set();

  for (const item of array) {
    uniqueValues.add(item.line.name);
  }

  return Array.from(uniqueValues);
}

/**
 * @description Generate a list of devices based on the passed list of filters
 * @param { [Object] } devices - Array of devices to filter
 * @param { [String] } filters - Array of strings to filter the devices on
 * @returns { Object }
 */
export function filterDevices(devices: IDevice[], filters: Array<String>): IDevice[] {
  const filteredDevices = devices.filter((device:IDevice) => {
    return filters.includes(device.line.name)
  })

  return filteredDevices
}

/**
 * Function to return an array of just the product name and the shortname
 */
/**
 * @description Generate a list of products for search autocomplete
 * @param { IDevices } devices - Array of devices
 * @returns { SearchItem[] } - Array of SearchItem objects
 */
export function getProductNameList(devices: IDevice[]): SearchItem[] {
  const searchItems: SearchItem[] = devices.map((device, index) => {
    return {
      id: device.id,
      name: device.product.name,
      shortName: device.shortnames[0],
      productIndex: index,
    }
  })

  return searchItems
}
