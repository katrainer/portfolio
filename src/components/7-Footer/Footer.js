import React from 'react'
import s from './Footer.module.css'
import sContainer from '../../common/style/Container.module.css'
import {H2TEG} from "../../common/components/H2TEG";

export const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <H2TEG title='Любавский Никита'/>
                <div className={s.footerText}>
                    <a href="https://www.linkedin.com/in/nikita-lyubavskiy-2b0428213/"
                       target='_blank'>Linkedin</a>
                    <a href="https://github.com/katrainer"
                       target='_blank'>GitHub</a>
                    <a href="https://www.codewars.com/users/katrainer"
                       target='_blank'>Code Wars</a>
                    <a href="https://t.me/NikitaLyi"
                       target='_blank'>Telegram</a>
                    <a href="tel:+7969632076"
                       target='_blank'>Тел.: +7 (996) 963-20-76</a>
                </div>
                <div className={s.bottom}>© 2022 Все права защищены</div>
            </div>
        </div>
    )
}