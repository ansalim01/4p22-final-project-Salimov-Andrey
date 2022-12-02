import './Main.css';
import CardProduct from './CardProduct/CardProduct.js';
import { useEffect, useState } from 'react';
import Filtering from './Filtering/Filtering';
import React from 'react';
import Pagination from '../../Pagination/Pagination';




// import AllProducts from './AllProducts/AllProducts.js';



function Main({ searchValue }) {
    const [categoryId, setCategoryId] = React.useState('all')
    // const [currentPage, setCurrentPage] = React.useState(8)
    const fillter = categoryId === 'all' ? '' : `/category/${categoryId}`
    // const poisc = searchValue ? `?sort=${searchValue}` : '';



    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products${fillter}`)
            // ${categoryId < 0 ? '' : `category/${item}`}
            // category/${categoryId}
            .then((res) => res.json())
            .then(result => {
                setItem(result)
            })
    }, [categoryId])




    let objCategory = item.slice(0);


    const fulter = item.filter((i) => {
        if (i.title.toLowerCase().includes(searchValue.toLowerCase())
            || i.category.toLowerCase().includes(searchValue.toLowerCase())
            || i.description.toLowerCase().includes(searchValue.toLowerCase())) {
            return true;
        }
        return false
    })


    return (
        <main className='main'>
            <div className="main__container _container">
                <div className="Filtering">
                    <div className="Filtering__container">
                        <div className="Filtering__title">Filtering</div>
                        <div className="Filtering__row">
                            <Filtering value={categoryId} obj={objCategory}
                                onClickCategory={(index) => setCategoryId(index)}
                            // chooseCategory={(id) => console.log(id)}
                            ></Filtering>
                        </div>

                    </div>
                </div>


                <div className="product">
                    <div className="product__container">
                        <h2 className='product__title'>Product</h2>
                        <div className="product__card">
                            {
                                // <AllProducts obj={objCategory}></AllProducts>
                                // фильтер------------------------------
                                // .filter((i) => {
                                //     if (i.title.toLowerCase().includes(searchValue.toLowerCase())
                                //         || i.category.toLowerCase().includes(searchValue.toLowerCase())
                                //         || i.description.toLowerCase().includes(searchValue.toLowerCase())) {
                                //         return true;
                                //     }
                                //     return false
                                // })

                                fulter.map((item, index) => {
                                    // if (item.category === chooseCategory)
                                    return <CardProduct key={index}
                                        category={item.category}
                                        img={item.image}
                                        title={item.title}
                                        description={item.description}
                                        id={item.id}
                                        price={item.price} />
                                })

                            }

                        </div>
                    </div>
                </div>
                <Pagination></Pagination>
            </div>

        </main>
    )

}

export default Main;