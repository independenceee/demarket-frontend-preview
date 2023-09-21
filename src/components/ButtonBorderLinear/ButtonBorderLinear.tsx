'use client'
import styles from './ButtonBorderLinear.module.scss'
import React from 'react'
interface ButtonProps{
    children:React.ReactNode;
}
const ButtonBorderLinear = ({children}:ButtonProps) => {
  return (
   <div className={styles.container}>
     <button className={styles.button_linear}>{children}</button>
   </div>
  )
}

export default ButtonBorderLinear
