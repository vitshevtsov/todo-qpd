import React from 'react'
import ImgButton from './ImgButton';
import styles from './ListItem.module.css';

export default function ListItem(props: any) {
return (
    <div className={styles.listItem}>
        <div>
            <div className={styles.textHeader}>
                <div className={styles.title}>{props.title}</div>
                <a href='' className={styles.category}>
                    <img src={require('../assets/iconFolderCat.png')}  alt='folder icon' className={styles.categoryImg}/>
                    {props.category}
                </a>
            </div>
            <div className='description'>{props.description}</div>
            
        </div>
        <div className='item-btns'>
            <ImgButton src={require('../assets/iconEdit.png')} />
            <ImgButton src={require('../assets/iconDelete.png')} />
        </div>
    </div>
)
}
