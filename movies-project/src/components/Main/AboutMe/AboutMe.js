import './AboutMe.css';
import me from '../../../images/me.png';

function AboutMe() {
    return (
        <div className='about-me'>
            <a name='student' href='/'> </a>
            <h2 className='about-me__title'>
                Студент
            </h2>
            <div className='about-me__subtitle'>
                <h3 className='about-me__name'>
                    Ранэль
                </h3>
                <h4 className='about-me__vocation'>
                    Фронтенд-разработчик, 31 год
                </h4>
                <p className='about-me__description'>
                    Я родился и живу в городе Казань. По образованию я экономист, но не дня не работал по специальности.
                    Начало своего трудового пути я начал в органах внутренних дел,
                    по истечению семи лет понял что это не мое. И вот я тут увлеченно завершаю свой дипломный проект.
                </p>
                <img className='about-me__image' src={me} alt='фотография создателя сайта'/>
                <a className='about-me__git' href='https://github.com/gilyazov-ranel'>
                    Github
                </a>
            </div>
        </div>
    )
}

export default AboutMe;