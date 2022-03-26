import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <div className="nonSupportedScreen">Извините, разрешение Вашего экрана не поддерживается</div>
  </React.StrictMode>,
  document.getElementById('root'),
);
