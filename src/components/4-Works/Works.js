import React from 'react'
import s from './Works.module.css'
import {Work} from "./Work/Work";
import sContainer from "../../common/style/Container.module.css";
import {H2TEG} from "../../common/components/H2TEG";
import todo from "../../assets/img/todo.PNG"
import cards from "../../assets/img/cards.jpg"
import socSet from "../../assets/img/sotsset.jpg"

export const Works = () => {
    const data = [
        {
            photo: '',
            title: 'Todo lists',
            description: 'aaaa aaa aaa',
            href: 'https://katrainer.github.io/todolist/',
            backgroundImage: {backgroundImage: `url(${todo})`},
        },
        {
            photo: '',
            title: 'Not facebook',
            description: 'aaaa aaa aaa',
            href: 'https://katrainer.github.io/socset-na-ts/',
            backgroundImage: {backgroundImage: `url(${socSet})`},
        },
        {
            photo: '',
            title: 'Cards',
            description: 'aaaa aaa aaa',
            href: 'https://katrainer.github.io/cards/',
            backgroundImage: {backgroundImage: `url(${cards})`},
        },
    ]
    return (
        <div id='works' className={s.works}>
            <div className={sContainer.container}>
                <H2TEG title='Мои работы'/>
                <div className={s.workContainer}>
                    {data.map(t =>
                        <Work phote={t.photo}
                              title={t.title}
                              description={t.description}
                              href={t.href}
                              style={t.backgroundImage}
                              key={t.title}/>
                    )}
                </div>
            </div>
        </div>
    )
}