import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const isScreenSupported = (screenWidth >= 1440) && (screenHeight >= 900);

ReactDOM.render(
  <React.StrictMode>
    {isScreenSupported
      ? (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      )
      : <div>Извините, разрешение Вашего экрана не поддерживается</div>}

  </React.StrictMode>,
  document.getElementById('root'),
);
