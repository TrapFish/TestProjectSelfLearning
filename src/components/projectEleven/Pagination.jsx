import React, { useEffect, useState } from 'react';

const ProductCard = ({ image, title }) => {
    return (
        <>
            <div className='product-card'>
                <img src={image} alt={title} className='product-img' />
                <span>{title}</span>
            </div>
        </>
    )
}

const PAGE_SIZE = 10;

function Pagination() {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchData = async () => {
        try {
            const fetchProduct = await fetch("https://dummyjson.com/products?total=195");
            const productDataRecieved = await fetchProduct.json();
            setProductData(productDataRecieved.products);
        } catch (error) {
            console.log("Error")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const totalProducts = productData.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;


    const handlePageChange = (value) => {
        setCurrentPage(value);
    }

    const goToNextPage = () => {
        setCurrentPage(prev=>prev+1);
    }

    const goToPreviousPage = () => {
        setCurrentPage(prev=>prev-1);
    }


    return !productData.length ? (<><h1>No record found</h1></>) : (
        <div className="container">
            <h1>Pagination</h1>

            <div className="product-container">
              
                {productData.slice(start, end).map((product, index) => {
                    return (
                        <ProductCard key={index} image={product.images[0]} title={product.title} />
                    )
                })}
               
            </div>


            <div className='pagination-container'>
                <button disabled={currentPage === 0} className='page-number' onClick={goToPreviousPage}>Left</button>
                {[...Array(noOfPages)].keys().map((value, index) => {
                    return (
                        <button key={index} className='page-number' onClick={()=>handlePageChange(value)}>{value}</button>
                    )
                })}
                 <button disabled={currentPage === noOfPages -1} className='page-number' onClick={goToNextPage}>Right</button>
            </div>

        </div>
    )
}

export default Pagination;