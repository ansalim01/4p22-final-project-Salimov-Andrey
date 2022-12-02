import './Header.css';
import imageHum from '../../../assets/img/human1.svg';
import imageShop from '../../../assets/img/shop.svg';
import { NavLink, Link } from 'react-router-dom'
import Search from '../Search/Search'

import { useSelector } from 'react-redux'

function Header({ searchValue, setSearchValue }) {
    const { items, totalPrice } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)

    return (
        <header className='header'>
            <div className="header__container _container">
                <Link to={`/`} className="header__logo">Relvise</Link>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item"><NavLink to={`/`} className="menu__link">Home</NavLink></li>
                        {/* <li className="menu__item"><NavLink to={`/`} className="menu__link">Product</NavLink></li>
                        <li className="menu__item"><NavLink to={`/`} className="menu__link">Pricing</NavLink></li> */}
                        <li className="menu__item"><NavLink to={'/contacts'} className="menu__link">Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="header__search">
                    <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
                </div>

                <div>
                    <a href=""><img src={imageHum} alt="" className='header__img header__img-human' /></a>
                    <Link to={`/basket`} href="" className='header__Linc-shop'><img src={imageShop} alt="" className='header__img header__img-shop' />


                        <span>Price {totalPrice}</span>


                        <span>Quantity {totalCount}</span>
                    </Link>
                    {/* {items.length} */}

                </div>
            </div>
        </header>
    )
}
export default Header; 