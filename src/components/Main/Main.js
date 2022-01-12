import React from 'react'
import sContainer from '../../common/style/Container.module.css'
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.aboutMeInfo}>
                    <h1>Привет! <br/>Меня зовут Никита <br/>Я react разрабочик</h1>
                </div>
                <div className={s.aboutMePhoto}>
                    <img src="https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-6.jpg" alt=""/>
                </div>
            </div>
        </div>
    )

}