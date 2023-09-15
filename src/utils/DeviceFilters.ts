import { IDevice, IDevices, Radio } from "../types"

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
export function getUniqueProductLine(array: IDevices): string[] {
  const uniqueValues: Set<IDevice[keyof IDevice]> = new Set();

  for (const item of array) {
    uniqueValues.add(item.line.name);
  }

  const values: string[] = Array.from(uniqueValues) as string[]

  return values
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

/**
 * @description Get the value of the key of the radio object that is passed
 * @param { Radio[] } radios - Array of Radio
 * @param { String } key - String to get the value at
 * @returns String, Number, or empty
 */
export function getRadioKeyValue(radios:Radio[], key:string): String | Number {
  for (const radioItem in radios) {
    let radio:Radio = radios[radioItem]
    for (const item in radio) {
      if (item === key) {
        return radio[item as keyof typeof radio]
      }
    }
  }
  return ''
}
