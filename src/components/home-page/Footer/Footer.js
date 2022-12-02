import './Footer.css';
import imgAtMail from '../../../assets/img/footer/atMail.svg';
import imgLocation from '../../../assets/img/footer/location.svg';
import imgPhone from '../../../assets/img/footer/phone.svg';

function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container _container">
                <div className="footer__column-information">
                    <h2 className='column-information__logo'>Relvise</h2>
                    <div className="column-information__text">
                        Some random stuff about flower shop and some more info cuz this box had to get fill
                        Some random stuff about flower shop and some more info cuz this box had to get fill
                        Some random stuff about flower shop and some more info cuz this box had to get fill
                    </div>

                </div>
                <div className="footer__column-link">
                    <div className="column-link__title">
                        Links
                    </div>
                    <div className="column-link__items">
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Home</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Shop</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">About</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Login</a>
                        </div>
                    </div>
                </div>
                <div className="footer__column-link">
                    <div className="column-link__title">
                        Links
                    </div>
                    <div className="column-link__items">
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Home</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Shop</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">About</a>
                        </div>
                        <div className="column-link__item">
                            <a href="" className="column-link__item-link">Login</a>
                        </div>
                    </div>
                </div>
                <div className="footer__column-contact">
                    <div className="column-contact__title">
                        Contact
                    </div>
                    <div className="column-contact__items">
                        <div className="column-contact__item">
                            <a href="https://www.google.ru/maps/place/26985+Brighton+Ln,+Lake+Forest,+CA+92630,+США/@33.6458302,-122.6221504,6z/data=!4m5!3m4!1s0x80dce9ec4381a4d5:0x69285c7c898ba440!8m2!3d33.6594363!4d-117.6592749" className="column-contact__link" target="_blank">
                                <img src={imgLocation} alt="" className='column-contact__img' />
                                <div className="column-contact__text">26985 Brighton Lane, Lake Forest, CA</div>
                            </a>
                        </div>
                        <div className="column-contact__item">
                            <a href="mailto:support@Flowers.com?subject=Вопрос по" className="column-contact__link">
                                <img src={imgAtMail} alt="" className='column-contact__img' />
                                <div className="column-contact__text">support@Flowers.com</div>
                            </a>
                        </div>
                        <div className="column-contact__item">
                            <a href="tel:+ 12365489" className="column-contact__link" >
                                <img src={imgPhone} alt="" className='column-contact__img' />
                                <div className="column-contact__text">+1 236 5489</div>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer; 