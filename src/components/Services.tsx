import './Services.css';

const SERVICES = [
    {
        icon: '🎯',
        title: 'ЛЕНДИНГ',
        price: 'от 5 000 ₽',
        days: 'Срок: 3–7 дней',
        badges: [
            'Дизайн + верстка',
            'Публикация на хостинге',
            '1 круг правок'
        ]
    },
    {
        icon: '🌐',
        title: 'МНОГОСТРАНИЧНИК',
        price: 'от 20 000 ₽',
        days: 'Срок: 14–21 день',
        badges: [
            'Дизайн + верстка всех страниц',
            'Каталог услуг и товаров',
            '3 круга правок'
        ]
    },
    {
        icon: '🛒',
        title: 'ИНТЕРНЕТ-МАГАЗИН',
        price: 'от 50 000 ₽',
        days: 'Срок: 4-8 недель',
        badges: [
            'Каталог + корзина',
            'Система заказов',
            '2 недели поддержки'
        ]
    }
];

export default function Services() {
    return (
        <section className="services">
            <div className="container">

                <h2 className="services-heading">Услуги</h2>

                <div className="services-grid">

                    {SERVICES.map((service, index) => (
                        <div key={index} className="service-card">

                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-price">{service.price}</p>
                            <p className="service-days">{service.days}</p>
                            <div className="service-badges">

                                {service.badges.map((badge, i) => (
                                    <span key={i} className="service-badge">{badge}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}