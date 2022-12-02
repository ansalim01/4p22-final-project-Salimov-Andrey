import './Filtering.css';
import React from 'react';
// import { NavLink, Link } from 'react-router-dom'


function Filtering({ obj, value, onClickCategory }) {
    // const onClickCategory = (i) => {
    //     setActivIndex(i)
    // }
    // function unique(arr) {
    //     console.log(Array.from(new Set(arr)));
    //     return Array.from(new Set(arr))
    // }
    // unique(props.obj)
    let result = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];
    // function unique(arr) {

    //     for (let str of arr) {
    //         if (!result.includes(str.category)) {
    //             result.push(str.category);
    //         }
    //     }
    //     return result;
    // }
    // unique(obj)

    return (
        <div className="filtering-items">
            {/* <div onClick={() => onClickCategory(0)} className={activIndex === 0 ? 'filtering-item filtering-active' : 'filtering-item'}>all</div> */}
            {
                result.map((item, index) => {
                    const capital = item.charAt(0).toUpperCase() + item.slice(1)
                    return <div onClick={() => onClickCategory(result[index])} key={item}
                        className={value === item ? 'filtering-item filtering-active' : 'filtering-item'} >
                        {capital}
                    </div>
                })
            }

            {/* {
                result.map((item, index) => {
                    const capital = item.charAt(0).toUpperCase() + item.slice(1)

                    return <NavLink to={`/`} className="filtering-item" key={index} onClick={() => props.chooseCategory(item)} >{capital}
                    </NavLink>
                })

            } */}
        </div>
    )
}

export default Filtering;