import './Pagination.css';
import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination() {
    return (
        <div className='Pagination' >
            <ReactPaginate
                className='Pagination__item'
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={i => console.log(i)}
                pageRangeDisplayed={5}
                pageCount={2}
                renderOnZeroPageCount={null}
            />

        </div>
    )
}

export default Pagination;