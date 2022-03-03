import React from 'react'
import s from './Recruit.module.css'
import sContainer from '../../common/style/Container.module.css'
import {H2TEG} from "../../common/components/H2TEG";

export const Recruit = () => {
    const onclickHandler = () => {

    }
    return (
        <div className={s.recruit}>
            <div className={sContainer.container} style={{marginBottom: 10}}>
                <H2TEG title='Готов к удаленной работе'/>
                <button>Нанять меня</button>
            </div>
        </div>
    )
}