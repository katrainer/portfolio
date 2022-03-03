import React from 'react'
import sContainer from '../../common/style/Container.module.css'
import s from './Main.module.css'
import foto from "../../assets/foto/black.png"

export const Main = () => {
    return (<div id='main' className={s.main}>
        <div className={`${sContainer.container} ${s.mainContainer}`}>
            <div className={s.aboutMeInfo}>
                    <span className={s.hello}>
                        Привет!
                    </span>
                <br/>
                <span className={s.name}>
                        Меня зовут Никита Любавский
                        </span>
                <br/>
                <span className={s.react}>
                        Я react разрабочик
                    </span>
            </div>
            <div className={s.aboutMePhoto}>
                <img src={foto} alt=""/>
            </div>
        </div>
    </div>)

}