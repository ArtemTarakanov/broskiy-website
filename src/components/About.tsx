import './About.css';

const ABOUT_CONTENT = {
    heading: 'Обо мне',
    name: 'Артём',
    role: 'Веб-разработчик',
    text1: 'Создаю сайты под ключ - от идеи до публикации.',
    text2: 'Специализируюсь на лендингах, многостраничниках и интернет-магазинах',
    text3: 'Приоритет - ваш комфорт и прозрачность на каждом этапе'
};

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <img src="/images/broskiy-image.PNG" alt="Broskiy Image" className="about-image__img" />
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="about-heading">{ABOUT_CONTENT.heading}</h2>
                            <p className="about-name">{ABOUT_CONTENT.name}</p>
                            <p className="about-description">{ABOUT_CONTENT.text1}</p>
                            <p className="about-description">{ABOUT_CONTENT.text2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}