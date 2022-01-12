import React from 'react'
import s from './Footer.module.css'
import sContainer from '../../common/style/Container.module.css'

export const Footer = () =>{
    return(
        <div className={s.footer}>
            <div className={sContainer.container}>
                <h2>Любавский Никита</h2>
                <div className={s.footerText}></div>
                <p>© 2022 Все права защищены</p>
            </div>
        </div>
    )
}