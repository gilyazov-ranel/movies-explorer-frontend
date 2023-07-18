import './NavTab.css';
function NavTab() {
    return (
        <div className='navtab'>
            <a href='#proect' className='navtab__button'>
                О проекте
            </a>
            <a href='#techs' className='navtab__button'>
                Технологии
            </a>
            <a href='#student' className='navtab__button'>
                Студент
            </a>
        </div>
    )
}

export default NavTab;