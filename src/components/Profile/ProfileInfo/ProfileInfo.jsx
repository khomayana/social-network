import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img className={style.photo} src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C214%2C3008%2C1579&wid=1200&hei=630&scl=2.506666666666667" alt="" />
            </div>
            <div className={style.description}> Ava + desc</div>
        </div>
    )
}

export default ProfileInfo;