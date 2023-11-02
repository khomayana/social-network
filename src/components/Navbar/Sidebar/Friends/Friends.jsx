import style from './Friends.module.css'

const Friends = (props) => {
    // console.log(props)
    return (
        <div>
            <img className={style.ava} src={props.ava} />
            <p className={style.name} >{props.name} </p>
        </div>
    )
}

export default Friends;