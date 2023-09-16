import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);
