import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://www.scottleroymarketing.com/wp-content/uploads/2016/06/Hiring-a-good-logo-designing-company-to-create-your-logo-1.jpeg" alt="logo" />
        </header>
    );
}

export default Header;