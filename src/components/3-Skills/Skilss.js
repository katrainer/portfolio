import React from 'react'
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import sContainer from "../../common/style/Container.module.css";
import {H2TEG} from "../../common/components/H2TEG";
import react from "../../assets/icon/react.png"
import redux from "../../assets/icon/redux.png"
import typescript from "../../assets/icon/typescript.png"
import thunk from "../../assets/icon/thunk.png"
import restAPI from "../../assets/icon/restAPIpng.png"
import postman from "../../assets/icon/postman.png"
import git from "../../assets/icon/git.png"
import axios from "../../assets/icon/axios.png"
import lib from "../../assets/icon/lib.png"
import leter from "../../assets/icon/let.png"
import htmlcss from "../../assets/icon/htmlcss.png"


export const Skills = () => {
    const data = [
        {
            photo: react,
            title: 'React',
        },
        {
            photo: redux,
            title: 'Redux',
        },
        {
            photo: typescript,
            title: 'Typescript',},
        {
            photo: thunk,
            title: 'Thunk',
        },
        {
            photo: restAPI,
            title: 'Rest API',
        },
        {
            photo: axios,
            title: 'Axios',
        },
        {
            photo: postman,
            title: 'Postman',
        },
        {
            photo: git,
            title: 'Git',
        },
        {
            photo: lib,
            title: 'MUI, FORMIK',
        },
        {
            photo: htmlcss,
            title: 'HTML/CSS',
        },
        {
            photo: leter,
            title: 'Деловая переписка',
        },
    ]
    return (
        <div id='skills' className={s.skills}>
            <div className={sContainer.container}>
                <H2TEG title='Скиллы'/>
                <div className={s.skillContainer}>
                    {data.map(t =>
                        <Skill photo={t.photo} title={t.title} description={t.description} key={t.title}/>
                    )}
                </div>
            </div>
        </div>
    )
}