import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const Clear=()=>{  
        dispatch(clearCart());
    };
    return(
        <div className="text-center text-2xl font-bold py-10">
           <h1>Cart</h1>
           <button className="m-4 px-4  items-center rounded-md  bg-orange-300" onClick={Clear}>
                    clear cart
                </button>
                {cartItems.length===0 ? <h1 className="text-center text-2xl font-bold py-10">Your cart is empty</h1> : null }
           <div className="max-w-3xl mx-auto py-6 px-4 w-full">
           <ItemList items={cartItems}/>
           </div>
        </div>
        
    );
};
export default Cart;