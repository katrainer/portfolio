import React from 'react'
import s from './Work.module.css'

export const Work = (props) => {
        return (
        <div className={s.work}>
            <div style={props.style} className={s.workImg}>
                <a href={props.href}
                   target='_blank'>Смотреть</a>
            </div>
            <div className={s.workText}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}