import Friends from "./Friends/Friends";
import style from './Sidebar.module.css'


const Sidebar = (props) => {
    let friendsElements = props.friendsData.map(item => <Friends
        id={item.id} name={item.name} ava={item.link} />)
    return (
        <div className={style.box}>
            {friendsElements}
        </div>
    )
}

export default Sidebar;