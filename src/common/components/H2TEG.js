import s from "./H2TEG.module.css"

export const H2TEG = (props) => {
    return <div className={s.h2teg}>
        <span>{props.title}</span>
        <div className={s.line}/>
    </div>
}