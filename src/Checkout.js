import React from 'react';
import {Link} from 'react-router-dom'

function Checkout(props) {
    const { checkoutItems } = props;
    /*const [checkoutItems, setCheckoutItems] = useState([]);

    const addToCheckout = (product) => {
        setCheckoutItems([...checkoutItems, product]);
    }

    const checkoutProducts = checkoutItems.map((product) => (
        <div key={product.id}>
          {`${product.title}: ${product.price}`}
        </div>
      ));*/
    

    console.log(checkoutItems);

  return (
    <table className='checkout-page'>
      <div>Checkout items</div>
    {checkoutItems.length === 0 && <div>Your cart is empty, <Link to='/products'>continue shopping</Link></div>}
    {checkoutItems.map((product) => (
    <div key={product.id} className='checkout-container'>
      <div className='checkout-items'>
      <img src={product.url} alt="icons" className='checkout-img'/>
        <p className='checkout-title-price'>{product.title} {product.price} SEK</p>
        <div className='btns'><button className='minus-btn'>-</button><button className='plus-btn'>+</button><button className='delete-btn'>Delete</button></div>
      </div>
      <div className='total'>Total price</div>
    </div>
  ))}
  </table>);
}

export default Checkout