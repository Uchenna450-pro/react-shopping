import React from "react";

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    if (halfStar) {
        stars.push(<i key="half" className="fas fa-star-half-stroke"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return <div className="rating-container">{stars}</div>;
};


const ProductComponent = ({ img, title, price, rating }) => {
    return (
        <div className="ProductComponent">
            <div className="product-image">
                <img src={img} alt="productimage" />
            </div>
            <div className="description">
                <h3>{title}</h3>
                <div className="string-rate">
                    <div className="price">${price}</div>
                    <Rating rating={rating} />
                </div>
                <button>View More</button>
            </div>
        </div>
    );
};

export default ProductComponent;
