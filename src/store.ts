import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import thunk from 'redux-thunk'
import { IDevices } from './types'

interface DeviceState {
  devices: IDevices
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
  state.devices.devices.find((device) => device.id === deviceId);

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
