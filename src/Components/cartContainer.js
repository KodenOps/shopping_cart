import { clearCart } from '../Features/Cart/cartSlice';
import { openModal } from '../Features/Modal/modalSlice';
import {CartItem} from './cartItem';
import {useDispatch,  useSelector } from 'react-redux';

 const CartContainer = () => {
   const dispatch = useDispatch();
    const {cartItems, total, itemCount} = useSelector((store)=> store.carts)

 if(itemCount < 1){
    return <section className='cart'>
                <header>
                    <h2>Your Bag</h2>
                    <h4 className='empty-cart'>Your cart is empty</h4>
                </header>
         </section>
    
 }
  return (
    <section className='cart'>
         <h2>Your Bag</h2>
         <div>
            {cartItems.map((e)=>{
                return <CartItem key={e.id}{...e}/>
            })}
         </div>
         <footer>
            <hr />
            <div className="cart-total">
            <h4>Total <span>${total.toFixed(2)}</span></h4>
            </div>
            <button className="btn clear-btn" onClick={()=>{
               dispatch(openModal())
            }}>Clear Cart</button>
         </footer>
    </section>
  )
};

export default CartContainer;