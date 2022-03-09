import React from 'react'
import ListItem from './ListItem'


export default function List() {
  return (
    <div>
        <h2>Items list:</h2>
        <ListItem title='Первый таск' descr='Описание 1' category='1'/>
        <ListItem title='Второй таск' descr='Описание 2' category='2'/>
    </div>
  )
}
