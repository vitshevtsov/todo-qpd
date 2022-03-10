import React from 'react'
import List from './List'
import Header from './Header'

import '../styles.css'

export default function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <div className='container'>
          <List />
        </div>
      </main>
    </div>
  )
}
