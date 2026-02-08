import './Process.css';
import {useState} from "react";

const STEPS = [
    {
        number: '01',
        title: 'Обсуждение',
        items: [
            'Анализ задачи и целей',
            'Формирование ТЗ',
            'Согласование сроков и бюджета'
        ]
    },
    {
        number: '02',
        title: 'Дизайн',
        items: [
            'Создание макетов в Figma',
            'Согласование визуала',
            'Утверждение финального дизайна'
        ]
    },
    {
        number: '03',
        title: 'Разработка',
        items: [
            'Верстка и программирование',
            'Тестирование на всех устройствах',
            'Публикация на хостинге'
        ]
    },
    {
        number: '04',
        title: 'Сдача',
        items: [
            'Обучение работе с сайтом',
            'Передача всех материалов',
            'Бесплатная поддержка 2 недели'
        ]
    }
];

export default function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(0);

    const toggleStep = (index: number) => {
        setActiveStep(activeStep === index ? null : index);
    };

    return (
        <section className="process">
            <div className="container">
                <h2 className="process-heading">Процесс разработки</h2>
                <div className="accordion">
                    {STEPS.map((step, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeStep === index ? 'active' : ''}`}
                        >
                            <div
                                className="accordion-header"
                                onClick={() => toggleStep(index)}
                            >
                                <span className="accordion-number">{step.number}</span>
                                <span className="accordion-title">{step.title}</span>
                                <span className="accordion-icon">
                                    {activeStep === index ? '▼' : '▶'}
                                </span>
                            </div>
                            <div className="accordion-content">
                                <ul className="accordion-items">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="accordion-item-text">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}