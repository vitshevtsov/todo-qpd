import React from 'react'
import ImgButton from './ImgButton';
import styles from './ListItem.module.css';

export default function ListItem(props: any) {
return (
    <div className={styles.listItem}>
        <div>
            <div className={styles.textHeader}>
                <div className={styles.title}>Title: {props.title}</div>
                <div className='category'>Category: {props.category}</div>
            </div>
            <div className='descr'>Description: {props.description}</div>
            
        </div>
        <div className='item-btns'>
            <ImgButton src={require('../assets/iconEdit.png')} />
            <ImgButton src={require('../assets/iconDelete.png')} />
        </div>
    </div>
)
}
