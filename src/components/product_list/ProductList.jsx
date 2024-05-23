import { useEffect, useState } from "react";
import "./ProductList.css";
import { getProducts } from "../../api/index.js";
import ProductItem from "./components/product_item/ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const productsFetchData = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            }
            catch (error) {
                console.info("[ProductList.jsx] - Failed to connect to the API");
                console.log(`[ProductList.jsx] - ${error}`);
            }
        };
        productsFetchData();
    }, []);

    const itemsPerPage = 12;
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedItems = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const paginatePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    }

    const paginateNextPage = () => {
        setCurrentPage(currentPage + 1);
        window.scrollTo(0, 0);
    }

    return (
        <div className="product__section">
            <h1 className="product__title">Products / Page {currentPage}</h1>
            <div className="product__list">
                {
                    Array.isArray(products) && products.length
                        ? (paginatedItems.map((item, index) => <ProductItem productData={item} key={index} />))
                        : (<h1 className="product__loading">Loading...</h1>)
                }
            </div>
            <div className="product__pagination">
                <button className="pagination__button" disabled={currentPage === 1} onClick={() => paginatePrevPage()}>&#9668;</button>
                <button className="pagination__button" disabled={currentPage === totalPages} onClick={() => paginateNextPage()}>&#9658;</button>
            </div>
        </div>
    );
}

export default ProductList;