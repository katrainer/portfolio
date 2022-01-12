import s from './Contacts.module.css'
import sContainer from '../../common/style/Container.module.css'
import {SuperButton} from "../../common/components/SuperButton";
export const Contacts = ()=>{
    const onclickHandler = () =>{

    }
    return (
        <div className={s.contacts}>
            <div className={sContainer.container}>
                <h2>Контакты</h2>
                <div className={s.contactsForm}>
                    <form action="">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <SuperButton onClick={onclickHandler} title='Отправить'/>
            </div>
        </div>
    )
}