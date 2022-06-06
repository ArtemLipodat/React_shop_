import Slider from "react-slick";

function Main(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <main className="main">
            <section className="performance">
                <div className="performance-title">
                    <h2>Вкусные букеты</h2>
                    <h3>для Ваших близких</h3>
                    <button>подобрать букет</button>
                </div>
                <div className="performance-info">
                    <ul>
                        <li>более 350 довольных клиентов</li>
                        <li>качественные ингредиенты</li>
                        <li>доступные цены</li>
                        <li>индивидульные заказы</li>
                        <li>доставка по г. Ижевску</li>
                    </ul>
                </div>
            </section>
            <section className="info">
                <h2>Как и когда оформить заказ?</h2>
                <div className="info-text">
                    <div className="info-text-item">
                        <p>1</p>
                        <span>Рекомендуем Вам заранее готовиться к празднику и заказывать букет за 2-3 дня до торжества</span>
                    </div>
                    <div className="info-text-item">
                        <p>2</p>
                        <span>Выбрать понравившийся букет из каталога, что представлен ниже</span>
                    </div>
                    <div className="info-text-item">
                        <p>3</p>
                        <span>Если не нашли подходящий букет : Вам нужно определиться с составом и бюджетом букета</span>
                    </div>
                    <div className="info-text-item">
                        <p>4</p>
                        <span>Позвонить/написать Viber, WhatsApp по номеру телефона <a href="tel:79501573115">+7 950 157 31 15</a></span>
                    </div>
                </div>
            </section>
            <section id="products" className="products">
                <div className="products-category">
                    <a href="/">Женские букеты </a><a className="ligth" href="/">/ Мужские букеты</a>
                    <span>Варианты оформления</span>
                </div>
                <div className="products-slider">
                    <Slider {...settings}>
                        <div className="slider-item">
                            <div className="products-info">
                                <span>Осенний букет с яблоками, лимоном и ягодами</span>
                                <p>В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля</p>
                                <img src="./img/stars.png" alt=""/>
                                <div className="products-info-button">
                                    <button>ЗАКАЗАТЬ</button>
                                    <span>1050 РУБ</span>
                                </div>
                            </div>
                            <div className="products-info-photo">
                                <img src="./img/products.png" alt=""/>
                            </div>
                        </div>
                        <div className="slider-item">
                            <div className="products-info">
                                <span>Осенний букет с яблоками, лимоном и ягодами</span>
                                <p>В букет входит: тут мы описываем что входит точный состав и тря ляляляля ля ля ля ут мы описываем что входит точный состав и тря ляляляля ля ля ля</p>
                                <img src="./img/stars.png" alt=""/>
                                <div className="products-info-button">
                                    <button>ЗАКАЗАТЬ</button>
                                    <span>1050 РУБ</span>
                                </div>
                            </div>
                            <div className="products-info-photo">
                                <img src="./img/products.png" alt=""/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </main>
    )
}

export default Main