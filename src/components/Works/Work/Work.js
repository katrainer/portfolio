import React from 'react'
import s from './Work.module.css'
import {SuperButton} from "../../../common/components/SuperButton";

export const Work = (props) => {
    const onclickHandler = () =>{

    }
    return (
        <div className={s.work}>
            <div className={s.workImg}>
                {/*<a href='' className={s.workButton}>Смотреть</a>*/}
            <SuperButton onClick={onclickHandler} title='Смотреть'/>
            </div>
            <div className={s.workText}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}