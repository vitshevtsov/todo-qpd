import React from 'react'
import styles from './ImgButton.module.css'

export default function ImgButton(props: any) {
  return (
    <a href={props.handler}>
        <img src={props.src} alt={props.alt} className={styles.imgBtn} />
    </a>
  )
}
