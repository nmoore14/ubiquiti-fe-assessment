import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk'
import { IDevice, IDevices } from './types'

interface DeviceState {
  devices: IDevice[],
  selectedDevice: string,
  displayList: boolean,
}


const initialState: DeviceState = {
  devices: [],
  selectedDevice: '',
  displayList: true,
}

const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    fetchDevicesSuccess(state, action:PayloadAction<IDevices>) {
      state.devices = action.payload
    },
    setSelectedDevice(state, action:PayloadAction<string>) {
      state.selectedDevice = action.payload
    },
    toggleDeviceView(state, action:PayloadAction<boolean>) {
      state.displayList = action.payload
    },
  },
})

export const { fetchDevicesSuccess, setSelectedDevice, toggleDeviceView } = deviceSlice.actions

export const selectDeviceById = (deviceId: string) => (state: RootState) =>
  state.devices.devices.find((device) => device.id === deviceId)

export const selectDeviceIndexById = (deviceId: string) => (state: RootState) =>
  state.devices.devices.findIndex((device) => device.id === deviceId)

export const getDevicesLength = () => (state: RootState) =>
  state.devices.devices.length

export const getDeviceIdByIndex = (deviceIndex:number) => (state: RootState) => {
  if (!state.devices.devices.length) {
    return ''
  }

  if (deviceIndex < 0) {
    deviceIndex = state.devices.devices.length - 1
  }

  if (deviceIndex > state.devices.devices.length - 1) {
    deviceIndex = 0;
  }

  return state.devices.devices[deviceIndex].id
}

const store = configureStore({
  reducer: {
    devices: deviceSlice.reducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
