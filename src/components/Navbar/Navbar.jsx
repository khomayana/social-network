import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import Sidebar from './Sidebar/Sidebar';
const setActive = ({ isActive }) => isActive ? style.active : "";
const Navbar = (props) => {
    // console.log(props)
    return (
        <div className={style.menu}>
            <nav >
                <ul>
                    <li className={style.item}>
                        <NavLink to='/' className={setActive}>Profile</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/dialogs' className={setActive}>Messages</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/news' className={setActive}>News</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/music' className={setActive}>Music</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/settings' className={setActive}>Settings</NavLink>
                    </li>
                </ul>
            </nav >
            {/* <div className={style.sidebar}>
                <Sidebar friendsData={props.state.friendsData} />

            </div> */}
        </div>
    );
}

export default Navbar;