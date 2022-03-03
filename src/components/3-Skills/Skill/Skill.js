import React from 'react'
import s from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.skillPhoto}>
                <img src={props.photo} alt=""/>
            </div>
            <div className={s.skillInfo}>
                <h3>{props.title}</h3>
            </div>
        </div>
    )
}