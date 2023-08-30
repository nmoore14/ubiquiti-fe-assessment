/* Types */
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

/* Interfaces */
export interface IDevice {
  sysids: string[];
  icon: Icon;
  line: Line;
  sysid: string;
  guids: string[];
  uisp: object;
  btle: object;
  id: string;
  product: Product;
  shortname: string[];
  triplets: object[];
}

export interface IDevices extends Array<IDevice>{}
