import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';
import { CartContext } from '../../contexts/cart.context';

import CartItem from '../../components/cart-item/cart-item.component';

import './checkout.styles.scss'

const Checkout = () => {
    const {products}  = useContext(ProductsContext);
    const  {cartItems, cartCount}  = useContext(CartContext);

    return (
        <div>
            <div className='cart-items' >
                {cartItems.map((item) =>(
                    <CartItem key={item.id} cartItem={item}/>
                ))}
            </div>
        </div>
    )
    
    console.log(cartItems)
}

export default Checkout;