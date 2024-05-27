import Navbar from "./Components/Navbar";
import CartContainer from "./Components/cartContainer";
import { useSelector, useDispatch } from "react-redux";
import {calculateTotal} from './Features/Cart/cartSlice';
import Modal from "./Components/Modal";
import {useEffect} from 'react'
    function App() {
      const {cartItems} = useSelector((store)=> store.carts)
      const {isOpen} = useSelector((store)=> store.modal)
      const dispatch = useDispatch();
        useEffect(()=>{
          dispatch(calculateTotal())
        }, [cartItems])
  return (
    <main>
      {isOpen &&  <Modal/>}
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
