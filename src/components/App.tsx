import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Tasks from '../routes/Tasks';
import Categories from '../routes/Categories';
import NoMatchRoute from '../routes/NoMatchRoute';
import '../styles.css';
import ModalProvider from '../context/ModalContext/ModalContextProvider';
import { DataContext } from '../context/context';

const App: React.FC = () => {
  const { openedItemId } = useContext(DataContext);
  const appClassNames = (openedItemId !== null) // при открытом модальном окне openedItemId = 0 (для новых задач) или id (редактирование / удаление)
    ? ['app', 'appWithOpenModal'].join(' ')
    : 'app';

  return (
    <ModalProvider>
      <div className={appClassNames}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="tasks" replace />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="categories" element={<Categories />} />
          <Route path="*" element={<NoMatchRoute />} />
        </Routes>
      </div>
    </ModalProvider>
  );
};

export default App;
