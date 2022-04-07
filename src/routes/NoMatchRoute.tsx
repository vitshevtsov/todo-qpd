import React from 'react';

/**
 * Компонент рендерится, если route не валидный
 */
const NoMatchRoute: React.FC = () => (
  <main style={{ padding: '1rem' }}>
    <p>There is nothing here!</p>
  </main>
);

export default NoMatchRoute;
