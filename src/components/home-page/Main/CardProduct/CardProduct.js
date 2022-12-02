import './CardProduct.css';
import ButtonAddToCart from '../../../common/ButtonAddToCart/ButtonAddToCart.js';
import { Link } from 'react-router-dom'
import Vector from "../../../../assets/img/button/Vector.svg";

import { addItem } from '../../../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';

function CardProduct({ id, img, title, description, price }) {
    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id))
    const dispatch = useDispatch();

    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            img,
            description,

        };
        dispatch(addItem(item));
    }

    function reductionText(text) {
        if (text.length > 100) {
            return text.slice(0, 100) + "...";
        } else {
            return text;
        }
    }

    return (
        <div className="product__card-item">
            <Link to={`products/${id}`} className="product__card-imgs">
                <img className='product__card-img' src={img} alt="kar" />
            </Link>
            <Link to={`products/${id}`} className="product__card-text">
                <h2 className="product__card-title">{title}</h2>
                <p className="product__card-description">{reductionText(description)}</p>
            </Link>
            <div className="product__card-price-butt">
                <Link to={`products/${id}`} className="product__card-price">{price} $</Link>
                {/* <ButtonAddToCart >Add to cart</ButtonAddToCart> */}
                {/* id={id} img={img} title={title} description={description} price={price} */}
                <button onClick={onClickAdd} className="product__card-button">
                    <img src={Vector} alt="" />
                    Add to cart {addedCount > 0 && <i>{addedCount}</i>}
                </button>
            </div>
        </div>
    )
}

export default CardProduct;