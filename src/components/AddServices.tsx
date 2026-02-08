import './AddServices.css';

const SERVICES = [
    {
        icon: '🔍',
        title: 'SEO-оптимизация',
        price: 'от 5 000 ₽',
        description: 'Продвижение сайта в поисковых системах'
    },
    {
        icon: '✍️',
        title: 'Текстрайтинг',
        price: 'от 1 500 ₽',
        description: 'Написание продающих текстов для сайта'
    },
    {
        icon: '♻️',
        title: 'Рефакторинг',
        price: 'от 10 000 ₽',
        description: 'Улучшение кода, изменение дизайна вашего проекта'
    },
    {
        icon: '🔧',
        title: 'Доп. правки',
        price: 'от 1 500 ₽/круг',
        description: 'Внесение изменений после сдачи проекта'
    }
];

export default function AddServices() {
    return (
        <section className="add-services">
            <div className="container">
                <h2 className="add-services-heading">Дополнительные услуги</h2>
                <div className="add-services-grid">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="add-services-card">
                            <div className="add-services-icon">{service.icon}</div>
                            <h3 className="add-services-title">{service.title}</h3>
                            <p className="add-services-price">{service.price}</p>
                            <p className="add-services-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}