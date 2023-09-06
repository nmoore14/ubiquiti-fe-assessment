/* Types */
export type Radio = {
  gain: number,
  maxPower: number,
  maxSpeedMegabitsPerSecond: number,
}

export type Unifi = {
  adoptability: string,
  network: {
    radios: Radio[],
  },
  numberOfPorts: number,
  ethernetMaxSpeedMegabitsPerSecond: number,
  systemIdHexadecimal: string,
  features: {
    bandsteer: boolean,
    ac: boolean,
    gen: number
  },
  chipset: string,
  type: string,
  minimumFirmwareRequired: string,
  deviceCapabilities: string[],
}

export type Icon = {
  id: string,
  resolutions: string[],
}

export type Line = {
  name: string,
  id: string,
}

export type Product = {
  abbrev: string,
  name: string,
}

export type DeviceParams = {
  id: string,
}

/* Interfaces */
export interface IDevice {
  sysids: string[];
  unifi: Unifi;
  icon: Icon;
  line: Line;
  sysid: string;
  guids: string[];
  uisp: object;
  btle: object;
  id: string;
  product: Product;
  shortnames: string[];
  triplets: object[];
}

export interface ISearchItem {
  id: string;
  name: string;
  shortName: string;
  productIndex: number;
}

export interface IDevices extends Array<IDevice>{}
