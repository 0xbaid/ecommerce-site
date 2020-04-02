import React from 'react';

import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import './cart-icon.style.scss';
import { toggleCartHidden } from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon= ({toggleCartHidden, countItem}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBagIcon className='shopping-icon' />
            <span className='item-count'>{countItem}</span>
        </div>
    );
};

const mapStateToProps = state => ({
    countItem: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)