import React from 'react'
// import * as styles from './';
import '../styles.css'

export default function ListItem(props: any) {
return (
    <div className='list-item'>
        <div className='item-text'>
            <div className='text-header'>
                <div className='title'>Title: {props.title}</div>
                <div className='category'>Category: {props.category}</div>
            </div>
            <div className='descr'>Description: {props.description}</div>
            
        </div>
        <div className='item-btns'>
            <button>edit</button>
            <button>delete</button>
        </div>
        
    
    </div>
    
)
}
