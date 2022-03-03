import s from './Contacts.module.css'
import sContainer from '../../common/style/Container.module.css'
import {H2TEG} from "../../common/components/H2TEG";
import React from "react";

export const Contacts = ()=>{
    const onclickHandler = () =>{

    }
    return (
        <div id='contacts' className={s.contacts}>
            <div className={sContainer.container}>
            <H2TEG title='Контакты'/>
                    <form action="" className={s.contactsForm}>
                        <input placeholder='Имя' type="text"/>
                        <input placeholder='E-mail' type="text"/>
                        <textarea placeholder='Послание' name="" id="" cols="30" rows="10"/>
                        <div>
                            <button>Отправить</button>
                        </div>
                    </form>
            </div>
        </div>
    )
}