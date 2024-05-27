import {CartIcon} from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    // const amount = useSelector((store)=>store.cart.itemCount)
    //To use this destructuring method, ensure you use the exact property as the variable name
    const { itemCount } = useSelector((store)=>store.carts);
  return (
    <nav>
        <div className="nav-center">
            <h3>reduc ToolKit</h3>
            <div className="nav-container">
                <CartIcon/>
                <div className='amount-container'>
                    <p className='total-amount'>{itemCount}</p>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar