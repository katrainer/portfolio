import React from 'react'
import s from './Nav.module.css'

export const Nav = () =>{
    return(
        <div className={s.nav}>
            <a href="#main">Главная</a>
            <a href="#skills">Скиллы</a>
            <a href="#works">Работы</a>
            <a href="#contacts">Контакты</a>
        </div>
    )
}