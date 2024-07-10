import React from "react";

const ProductItem = ({img, title, description, number}) => {
    return (
        <div className="ProductItem">
            <div className="product-image">
                <img src={img} alt="productimage" />
            </div>
            <div className="description">
                <h3>{String(title).toUpperCase()}</h3>
                <p>{description}</p>
                <p>{number} Products</p>
                <button>View {title}</button>
            </div>
        </div>
    );
};

export default ProductItem;