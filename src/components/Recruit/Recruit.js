import React from 'react'
import s from './Recruit.module.css'
import sContainer from '../../common/style/Container.module.css'
import {SuperButton} from "../../common/components/SuperButton";

export const Recruit = () => {
    const onclickHandler = () =>{

    }
    return (
        <div className={s.recruit}>
            <div className={sContainer.container}>
                <h2>Рассматриваю варианты удаленной работы</h2>
                <SuperButton onClick={onclickHandler} title='Нанять меня'/>
            </div>
        </div>
    )
}