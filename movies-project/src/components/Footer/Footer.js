import './Footer.css'
function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__subtitle'>
                <p className='footer__year'>
                    &#169; 2023
                </p>
                <ul className='footer__block'>
                    <li> <a className='footer__link' href='https://practicum.yandex.ru/' target='blank'>
                        Яндекс.Практикум
                    </a>
                    </li>
                    <li><a className='footer__link' href='https://github.com/gilyazov-ranel' target='blank' >
                        Github
                    </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;