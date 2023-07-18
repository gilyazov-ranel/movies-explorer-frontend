import './Techs.css';
function Techs() {
    return (
        <div className='techs'>
            <a name='techs' href='/'> </a>
            <h2 className='techs__name'>
                Технологии
            </h2>
            <h3 className='techs__title'>
                7 технологий
            </h3>
            <p className='techs__subtitle'>
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
            </p>
            <div className='techs__technology'>
                <p className='techs__technology techs__technology_description'>
                    HTML
                </p>
                <p className='techs__technology techs__technology_description'>
                    CSS
                </p>
                <p className='techs__technology techs__technology_description'>
                    JS
                </p>
                <p className='techs__technology techs__technology_description'>
                    React
                </p>
                <p className='techs__technology techs__technology_description'>
                    Git
                </p>
                <p className='techs__technology techs__technology_description'>
                    Express.js
                </p>
                <p className='techs__technology techs__technology_description'>
                    mongoDB
                </p>
            </div>
        </div>
    )
}

export default Techs;