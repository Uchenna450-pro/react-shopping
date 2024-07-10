import React from "react";

const TableRow = ({ id, img, text, quantity, price, total, setSampleData }) => {
    const handleIncrement = id => {
        setSampleData(prev => {
            const updatedData = prev.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            return updatedData;
        });
        setSampleData(prev => prev.map(item => item.id === id ? { ...item, total: item.price * item.quantity } : item));
    };
    const handleDecrement = id => {
        setSampleData(prev => {
            const updatedData = prev.map(item => item.id === id ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 } : item);
            return updatedData;
        });
        setSampleData(prev => prev.map(item => item.id === id ? { ...item, total: item.price * item.quantity } : item));
    };
    return (
        <div className="TableRow">
            <img src={img} alt="" />
            <span>{text}</span>
            <span>${price}</span>
            <p>
                <span className="quantity-btn" onClick={() => handleDecrement(id)}>-</span>
                <span className="quantity-btn">{quantity}</span>
                <span className="quantity-btn" onClick={() => handleIncrement(id)}>+</span>
            </p>
            <span>${total}</span>
            <div className="icon">
                <i className="fas fa-trash-alt"></i>
            </div>
        </div>
    );
};

export default TableRow;
