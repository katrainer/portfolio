import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import sContainer from "../../common/style/Container.module.css";


export const Skills = () => {
    const data = [
        {
            photo: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-6.jpg',
            title: 'React/Redux',
            description: 'aaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaaaa'
        },
        {
            photo: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-6.jpg',
            title: 'Typescript',
            description: 'aaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaaaa'
        },
        {
            photo: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-6.jpg',
            title: 'HTML/CSS',
            description: 'aaaaaa aaaaaaaaaaaaaaaaaa aaaaa aaaaaa'
        },
    ]
    return (
        <div className={s.skills}>
            <div className={sContainer.container}>
                <h2>Скиллы</h2>
                <div className={s.skillContainer}>
                    {data.map(t =>
                        <Skill photo={t.photo} title={t.title} description={t.description}/>
                    )}
                </div>
            </div>
        </div>
    )
}