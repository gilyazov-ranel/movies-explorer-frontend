import './Header.css';
import { NavLink, Link } from "react-router-dom";
function Header({
    isOpenBurgerMenu,
    isCloseBurgerMenu,
    isBurgerMenu,
    loggedIn
}) {

    return (
        <header className='header'>
            <Link to='/' className='header__logo'> </Link>
            {loggedIn && <nav className='header__nav'>
                <NavLink to='/movies' className='header__movie'>Фильмы</NavLink>
                <NavLink to='/saved-movies' className='header__movie'>Сохраненные фильмы</NavLink>
            </nav>}

            <div className='header__block'>
                {loggedIn ? <>
                    <Link to='/profile' className='header__profile'>
                        Аккаунт
                    </Link>
                    <Link to='/profile' className='header__account'>
                    </Link></> :
                    <>
                        <Link to='/signup' className='header__button'>
                            Регистрация
                        </Link>
                        <Link to='/signin' className='header__landing'>
                            Войти
                        </Link>
                    </>}

                <div className={(loggedIn ? 'header__burger' : '')
                }
                    onClick={isOpenBurgerMenu} >
                </div>
            </div>

            <div className={'burger-menu' + (isBurgerMenu ? ' open' : ' ')}>
                <button type='button' className='burger-menu__close' onClick={isCloseBurgerMenu}>
                </button>
                <nav className='burger-menu__nav'>
                    <ul>
                        <li ><NavLink to='/' className='burger-menu__title' onClick={isCloseBurgerMenu}>Главная</NavLink></li>
                        <li ><NavLink to='/movies' className='burger-menu__title' onClick={isCloseBurgerMenu}>Фильмы</NavLink></li>
                        <li ><NavLink to='/saved-movies' className='burger-menu__title' onClick={isCloseBurgerMenu}>Сохранённые фильмы</NavLink></li>
                    </ul>
                </nav>
                <div className='burger-menu__block'>
                    <Link to='/profile' className='burger-menu__profile' onClick={isCloseBurgerMenu}>
                        Аккаунт
                    </Link>
                    <Link to='/profile' className='burger-menu__account' onClick={isCloseBurgerMenu}>
                    </Link>
                </div>
            </div>


        </header>
    )
}
export default Header;