import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import DataProvider from './context/DataContext/DataContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
    <div className="nonSupportedScreen">Извините, разрешение Вашего экрана не поддерживается</div>
  </React.StrictMode>,
  document.getElementById('root'),
);
