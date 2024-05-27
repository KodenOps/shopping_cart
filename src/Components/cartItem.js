import React from 'react'
import { ChevronDown, ChevronUp } from '../icons'
import { useSelector, useDispatch } from 'react-redux'
import {removeItems, increase, decrease} from '../Features/Cart/cartSlice'
export const CartItem = ({id, img, title, price, amount}) => {
 const dispatch = useDispatch();
  return (
   <article className='cart-item'>
    <img src={img} alt={title} />
    <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button className="remove-btn" onClick={()=>dispatch(removeItems(id))}>Remove</button>
    </div>
    <div>
        <button className="amount-btn" onClick={(e)=>{
             if(amount <10 ){ dispatch(increase({id}))}
        }}>
            <ChevronUp/>
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={(e)=>{
            if(amount > 1){ dispatch(decrease({id}))}
            if (amount === 1){
                dispatch(removeItems(id));
                return;
            }
        }
        }>
            <ChevronDown/>
        </button>
    </div>
   </article>
  )
}

