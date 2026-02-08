import './Hero.css'

const HERO_CONTENT = {
    heading: 'BRØSKIY',
    subheading: '<web-sites production>',
    button: 'Заказать сайт'
}

export default function Hero(){
    return(
        <section className="hero">
            <div className="container">
                <div className = "hero-content">
                    <h1 className = "hero-content-heading">{HERO_CONTENT.heading}</h1>
                    <h2 className = "hero-content-subheading">{HERO_CONTENT.subheading}</h2>
                    <a href="https://t.me/broskiy_portfolio" target="_blank" rel="noopener noreferrer" className="hero-button">
                        {HERO_CONTENT.button}
                    </a>
                </div>
            </div>
        </section>

    );
}