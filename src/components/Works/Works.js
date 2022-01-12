import React from 'react'
import s from './Works.module.css'
import {Work} from "./Work/Work";
import sContainer from "../../common/style/Container.module.css";

export const Works = () => {
    const data = [
        {}
    ]
    return (
        <div className={s.works}>
            <div className={sContainer.container}>
                <h2>Мои работы </h2>
                <div className={s.workContainer}>
                    <Work title='Todolist' description={'aaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaaaa'}/>
                    <Work title='Todolist' description={'aaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaaaa'}/>
                </div>
            </div>
        </div>
    )
}