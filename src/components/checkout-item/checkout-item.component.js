import React from 'react';
import './checkout-item.style.scss';

import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.action';

const CheckoutItem = ({cartItem, clearItem}) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <span className='quantity'>{quantity}</span>
            <span className='remove-button' onClick={() => clearItem(cartItem)}>&#x2716;</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);