import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import DataProvider from './context/DataContext/DataContextProvider';
import ServiceProvider from './context/ServiceContext/ServiceContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ServiceProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ServiceProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
