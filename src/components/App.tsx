import React from 'react'
import List from './List'
import '../styles.css'

export default function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div>
          <div>Logo</div>
          <a href="">Задачи</a>
          <a href="">Категории</a>
        </div>
        <button>Добавить задачу</button>
      </header>
      <main>
        <div className='container'>
          <br />
          <List />
        </div>
      </main>
    </div>
  )
}
