import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__subtitle'>
                <p className='footer__year'>
                    &#169; 2023
                </p>
                <div className='footer__block'>
                    <a className='footer__link' href='https://practicum.yandex.ru/'>
                        Яндекс.Практикум
                    </a>
                    <a className='footer__link' href='https://github.com/gilyazov-ranel'>
                        Github
                    </a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;