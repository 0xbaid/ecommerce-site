import React from 'react';
import './cart-dropdown.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {   
                cartItems.length ? 
                (   cartItems.map( 
                        cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)
                    )
                )
                :
                (<span className='empty-message'>Your cart is empty!</span>)
            }
            </div>
            <CustomButton onClick={() => {history.push('/checkout') ; toggleCartHidden() }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
