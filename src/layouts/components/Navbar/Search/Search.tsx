'use client'
import styles from './Search.module.scss'
import React from 'react'
interface SearchProps{
    title:string,
    children:React.ReactNode;
}
const Search = ({title,children}:SearchProps) => {
  return (
    <form className={styles.container_search}>
      <input className={styles.search_input} type="search" placeholder={`${title}`}/>
      <button type="submit" className={styles.icon_search_nav}>{children}</button>
    </form>
  )
}

export default Search
