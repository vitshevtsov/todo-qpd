import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
// import { IModalContext, ModalContext } from './context/modalContext';
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
// const initialModalContext: IModalContext = {
//   isAddTaskOpen: false,
//   isAddCategoryOpen: false,
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <ModalContext.Provider value={initialModalContext}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ModalContext.Provider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
