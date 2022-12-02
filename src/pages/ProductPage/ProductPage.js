import './ProductPage.css'
import Header from '../../components/home-page/Header/Header';
import Footer from '../../components/home-page/Footer/Footer';
// import ButtonAddToCart from '../../components/common/ButtonAddToCart/ButtonAddToCart'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Vector from "../../assets/img/button/Vector.svg";

import { addItem } from '../../redux/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux';



function ProductPage({ id, title, price, img, description }) {




    const { userId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {

            const response = await fetch(`https://fakestoreapi.com/products/${userId}`);
            const result = await response.json();

            setProduct(result);
        })();
    }, [userId])
    console.log(product);
    const test = {
        id: product.id,
        title: product.title,
        price: product.price,
        img: product.image,
        description: product.description,
        key: product.id,

    }

    const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id, console.log(state)))

    const dispatch = useDispatch();

    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {

        dispatch(addItem(test));
        console.log(cartItem);

    }


    return (
        <div className="wrapper">
            <Header />
            <main className='main'>
                <div className="main__container _container">
                    <div className="main__product">
                        <div className="main__product-items">
                            <div>
                                <div className="main__product-imgs">
                                    <img className='main__product-img' src={product.image} alt='img'></img>
                                </div>
                            </div>
                            <div className="main__product-body">
                                <div className="main__product-title">{product.title}</div>
                                <div className="main__product-description">{product.description}</div>
                                <div className="main__product-price">{product.price} $</div>
                                <button onClick={onClickAdd} className="product__card-button">
                                    <img src={Vector} alt="" />
                                    Add to cart {addedCount > 0 && <span> {addedCount}</span>}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>


            <Footer></Footer>
        </div>

        //         <div className="wrapper">
        //             <Header />


        //             <div className="product__card-item">
        //                 <div className="product__card-imgs">
        //                     <img className='product__card-img' src={product.img} alt="kar" />
        //                 </div>
        //                 <div className="product__card-text">
        //                     <h2 className="product__card-title">{product.title}</h2>
        //                     <p className="product__card-description">{product.description}</p>
        //                 </div>
        //                 <div className="product__card-price-butt">
        //                     <div className="product__card-price">{product.price} р</div>
        //                     <ButtonAddToCart>Add to cart</ButtonAddToCart>
        //                 </div>
        //             </div>

        //             <Footer />
        //         </div>
    )

}

export default ProductPage;