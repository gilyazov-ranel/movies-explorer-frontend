import './Techs.css';
function Techs() {
    return (
        <section id='techs' className='techs'>
            <h2 className='techs__name'>
                Технологии
            </h2>
            <h3 className='techs__title'>
                7 технологий
            </h3>
            <p className='techs__subtitle'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <ul className='techs__technology'>
                <li className='techs__technology-description'>
                    HTML
                </li>
                <li className='techs__technology-description'>
                    CSS
                </li>
                <li className='techs__technology-description'>
                    JS
                </li>
                <li className='techs__technology-description'>
                    React
                </li>
                <li className='techs__technology-description'>
                    Git
                </li>
                <li className='techs__technology-description'>
                    Express.js
                </li>
                <li className='techs__technology-description'>
                    mongoDB
                </li>
            </ul>
        </section>
    )
}

export default Techs;