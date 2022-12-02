import './BasketPage.css'
import Header from '../../components/home-page/Header/Header';
import Footer from '../../components/home-page/Footer/Footer';
import garbage from '../../assets/img/Vector.svg';
import CardItem from '../../components/common/CardItem/CardItem'

import { useDispatch, useSelector } from 'react-redux';
import { clearItem, } from '../../redux/slices/cartSlice';


function BasketPage() {
    const item = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const onClickClear = () => {
        dispatch(clearItem());
    }
    return (

        <div className="wrapper">
            <Header />
            <main className="main">
                <div className="main__container main__container-BasketPage _container ">


                    <div className="main__heder">
                        <div className="main__heder-title">Basket</div>
                        <button onClick={onClickClear} className="main__heder-button">
                            <div className="main__heder-text">Сlear</div>
                            <img className="main__heder-img" src={garbage} alt='ter'></img>
                        </button>

                    </div>
                    <div className="main__basket">
                        {
                            item.map(item => <CardItem ket={item.id} {...item}></CardItem>)
                        }

                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default BasketPage;