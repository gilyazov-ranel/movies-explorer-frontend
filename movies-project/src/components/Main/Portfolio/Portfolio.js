import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__name'>
                Портфолио
            </h2>
            <ul className='portfolio__block'>
                <li className='portfolio__link'><a href='https://gilyazov-ranel.github.io/russian-travel/' className='portfolio__non-link' target='blank'>
                    Статичный сайт
                </a>
                </li>
                <li className='portfolio__icon'> <a href='https://gilyazov-ranel.github.io/russian-travel/' className='portfolio__non-link' target='blank'>&#8599;</a>
                </li>
                <li className='portfolio__link'> <a href='https://gilyazov-ranel.github.io/mesto/' className='portfolio__non-link' target='blank'>
                    Адаптивный сайт
                </a>
                </li>
                <li className='portfolio__icon'> <a href='https://gilyazov-ranel.github.io/mesto/' className='portfolio__non-link' target='blank'>&#8599;</a>
                </li>
                <li className='portfolio__link'> <a href='https://github.com/gilyazov-ranel/react-mesto-api-full-gha' className='portfolio__non-link' target='blank'>
                    Одностраничное приложение
                </a>
                </li>
                <li className='portfolio__icon'> <a href='https://github.com/gilyazov-ranel/react-mesto-api-full-gha' className='portfolio__non-link' target='blank'>&#8599;</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;