import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__name'>
                Портфолио
            </h2>
            <div className='portfolio__block'>
                <a href='https://gilyazov-ranel.github.io/russian-travel/' className='portfolio__link'>
                    Статичный сайт
                </a>
                <a href='https://gilyazov-ranel.github.io/russian-travel/' className='portfolio__icon'> </a>
            </div>
            <div className='portfolio__block portfolio__block_separation'>
                <a href='https://gilyazov-ranel.github.io/mesto/' className='portfolio__link'>
                    Адаптивный сайт
                </a>
                <a href='https://gilyazov-ranel.github.io/mesto/' className='portfolio__icon'> </a>
            </div>
            <div className='portfolio__block'>
                <a href='https://github.com/gilyazov-ranel/react-mesto-api-full-gha' className='portfolio__link'>
                    Одностраничное приложение
                </a>
                <a href='https://github.com/gilyazov-ranel/react-mesto-api-full-gha' className='portfolio__icon'> </a>
            </div>
        </div>
    )
}

export default Portfolio;