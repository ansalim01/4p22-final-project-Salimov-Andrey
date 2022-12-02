// import './ButtonAddToCart.css';
// import Vector from "../../../assets/img/button/Vector.svg";

// import { addItem } from '../../../redux/slices/cartSlice'
// import { useDispatch, useSelector } from 'react-redux';

// function ButtonAddToCart({ children, id, title, price, img }) {
//     const dispatch = useDispatch();
//     const onClickAdd = () => {
//         const item = {
//             id,
//             title,
//             price,
//             img,
//         };
//         dispatch(addItem(item));
//     }
//     return (
//         <button onClick={onClickAdd} className="product__card-button">
//             <img src={Vector} alt="" />
//             {children}
//         </button>
//     )
// }

// export default ButtonAddToCart;