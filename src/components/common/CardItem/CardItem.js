import './CardItem.css'
import Close from '../../../assets/img/Close.svg';
import plus from '../../../assets/img/plus.svg';
import munys from '../../../assets/img/munys.svg';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../../redux/slices/cartSlice';


function CardItem({ img, id, title, price, count, imageUrl, description }) {
    const dispatch = useDispatch();
    const onClickPlus = () => {
        dispatch(addItem({
            id,
        }),
        )
    };
    const onClickMinus = () => {
        dispatch(
            minusItem(id)
        )
    };
    const onClickRemove = () => {
        dispatch(
            removeItem(id)
        )
    };
    return (
        <div className="basket__item">
            <div>
                <div className="basket__imgs">
                    <img className="basket__img" src={img} alt='ter'>
                    </img>
                </div>

            </div>
            <div className="basket__text">

                <div className="basket__title">{title}</div>
                <div className="basket__description">{description}</div>
            </div>
            <div className="basket__scores">
                <div className="basket__scores-minus">
                    <button onClick={onClickMinus}><img src={munys} alt='munys'></img></button>
                </div>
                <div className="basket__scores-number">{count}</div>
                <div className="basket__scores-plus"><button onClick={onClickPlus}><img src={plus} alt='plus'></img></button></div>
            </div>
            <div className="basket__price">
                <div className="basket__price-item">

                    {((price * 10) * (count * 10)) / 100}$</div>
            </div>
            <div className="basket__cross"><img onClick={onClickRemove} src={Close} alt='Close'></img></div>
        </div>

    )
}

export default CardItem;