import Hr from '../HomePage/Hr/Hr'
import s from './Favorites.module.scss'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites] = useState('')



    useEffect(() => {
      axios.get("http://localhost:8001/api/cue/")
    .then(res => {
      setFavorites(res.data)
    })
    .catch(err => console.error(err))
    }, [setFavorites])

  
  

  return (
    <div className="container">
        <Hr title="Избранное"/>
        <div className={s.section}>
            {}
        </div>
    </div>
  )
}

export default Favorites