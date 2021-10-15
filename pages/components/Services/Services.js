const Services = () => {
    return (
        <div className="services">
            <h2 className="white">Our services</h2>
            <div className="services__row row">
                <div className="services__item">
                    <h3 className="services__title red">Web platforms</h3>
                    <h4 className="services__desc white">
                        E-commerce. E-learning. CRM systems. Admin dashboards.
                        HR Management systems. Blogs
                    </h4>
                </div>
            </div>
            <div className="services__row row-reverse">
                <div className="services__item">
                    <h3 className="services__title red">Mobile applications</h3>
                    <h4 className="services__desc white">
                        Cross platform mobile applications for IOS and Android
                    </h4>
                </div>
            </div>
            <div className="services__row row">
                <div className="services__item">
                    <h3 className="services__title red">Landing pages</h3>
                    <h4 className="services__desc white">
                        Beautiful and stylish langing pages for your business
                    </h4>
                </div>
            </div>
            <div className="services__row row-reverse">
                <div className="services__item">
                    <h3 className="services__title red">UI & UX design</h3>
                    <h4 className="services__desc white">
                        Creative design for any product
                    </h4>
                </div>
            </div>
            <div className="services__row row">
                <div className="services__item">
                    <h3 className="services__title red">Staff augmentation</h3>
                    <h4 className="services__desc white">
                        Experienced backend and frontend developers for any kind
                        of project
                    </h4>
                </div>
            </div>
            <div className="services__row row-reverse">
                <div className="services__item">
                    <h3 className="services__title red">MVP development</h3>
                    <h4 className="services__desc white">
                        Test your business idea with minimum valuable product
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Services;
