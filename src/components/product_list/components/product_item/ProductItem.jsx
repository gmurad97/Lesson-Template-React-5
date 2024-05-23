import "./ProductItem.css";

const ProductItem = ({ productData }) => {
    const { title, description, price, rating, stock, brand, category, thumbnail } = productData;
    return (
        <div className="product__item">
            <div className="product__item-img-block">
                <img className="product__item-img" src={thumbnail} alt={title} />
            </div>
            <div className="product__item-title">
                <h1 className="product__item-title-text">{title}</h1>
            </div>
            <div className="product__item-description">
                <p className="product__item-description-text">{description}</p>
            </div>
        </div>
    );
}

export default ProductItem;