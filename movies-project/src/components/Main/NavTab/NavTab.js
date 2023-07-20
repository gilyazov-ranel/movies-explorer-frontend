import './NavTab.css';
function NavTab() {
    return (
        <nav className='navtab'>
            <a href='#proect' className='navtab__button'>
                О проекте
            </a>
            <a href='#techs' className='navtab__button'>
                Технологии
            </a>
            <a href='#student' className='navtab__button'>
                Студент
            </a>
        </nav>
    )
}

export default NavTab;