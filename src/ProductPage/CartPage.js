import { CartProvider, useCart } from "react-use-cart";
import Navbar from "../HomePage/Navbar";
import { Container, Row , Col} from "reactstrap";





function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,cartTotal ,totalItems 
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    
    <div className="container">

      <div className="text-center">
       <button className="btn btn-danger px-3 mb-2" onClick={emptyCart}>Delete All ({totalUniqueItems})</button>
       </div>
       <table className="table table-dark ">
        <thead>
            <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>price</th>
            <th className="ps-5">Operation</th>
            </tr>
        </thead>
        <tbody>
       

        {items.map((item) => (
 <tr>


          <td key={item.id}>{item.title}</td>
          <td><img src={item.images[0]} className="mm"></img></td>
          <td>{item.quantity}</td>
          <td>{item.price * item.quantity}</td>
          <td> <button className="btn btn-primary px-3"
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button className="btn btn-success px-3 mx-3"
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
             +
            </button>
            <button className="btn btn-danger px-3" onClick={() => removeItem(item.id)}>X</button></td>

          </tr>
        ))}
        

        </tbody>
      </table>
       <h2 className="text-center pb-5">Total Item : {totalItems}  Total price : {cartTotal } </h2>
    </div>


  );
        }



   function CartPage() {
   

    return (
      <CartProvider>
      <Navbar/>

       <Cart/>


      </CartProvider>
    )
  }
  
  export default CartPage;





