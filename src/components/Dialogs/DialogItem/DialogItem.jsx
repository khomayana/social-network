import { NavLink } from 'react-router-dom';
import style from './../Dialogs.module.css';


const DialogItem = (props) => {
    return (
        <div className={style.dialogItem}>
            <NavLink className={style.avaBox} to={'/dialogs/' + props.id}>
                <img className={style.avatar} src={props.link} />
                <span >{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;