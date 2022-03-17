import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
// import ModalContext from './context/modalContext';

// async function getData() {
//   try {
//     const response = await fetch('https://api.punkapi.com/v2/beers', {mode: 'no-cors'});
//     const data = await response.json();
//     return data;
//   } catch(error) {
//     alert(`Error: ${error}`)
//   }
// };

// const data = getData();
// console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root'),
);
