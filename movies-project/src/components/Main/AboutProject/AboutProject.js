import './AboutProject.css'
function AboutProject() {
    return (
        <div name='proect' className='about-project'>
            <a name='proect' href='/'> </a>
            <h2 className='about-project__title'>
                О проекте
            </h2>
            <div className='about-project__block'>
                <div>
                    <h3 className='about-project__subtitle'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about-project__description'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div>
                    <h3 className='about-project__subtitle'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about-project__description'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>


                <div className='about-project__weeks'>
                    <p className='about-project__weeks about-project__weeks_one'>
                        1 неделя
                    </p>
                    <p className='about-project__weeks about-project__weeks_four'>
                        4 недели
                    </p>
                    <p className='about-project__weeks about-project__weeks_back'>
                        Back-end
                    </p>
                    <p className='about-project__weeks about-project__weeks_front'>
                        Front-end
                    </p>
                </div>

            </div>
        </div>
    )

}
export default AboutProject;