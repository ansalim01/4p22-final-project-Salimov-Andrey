import './AllProducts.css';
import CardProduct from '../CardProduct/CardProduct.js';
import { useEffect, useState } from "react";

function AllProducts(props) {
    // const [counter, setCounter] = useState(0);
    // useEffect(() => {
    //     console.log(1);
    // })
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch(props.obj)
    //         // .then((response) => response.json())
    //         .then(result => {
    //             setProducts(result)
    //         })
    // }, [])




    return (
        props.obj.map((item, index) => {

            return <CardProduct key={index}
                category={item.category}
                img={item.image}
                title={item.title}
                description={item.description}
                id={item.id}
                price={item.price} />
        })
    )

}

export default AllProducts;