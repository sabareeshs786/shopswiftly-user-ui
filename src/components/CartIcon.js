import { Cart2 } from 'react-bootstrap-icons';

export default function CartIcon(){
    return (
        <div className="cart">
        <a href="/cart" role="button">
          <div className="my-account d-flex justify-content-left align-items-center">
            <div>
            <Cart2 className="cust-svg" style={{width:'1.5rem', height:'1.5rem'}}></Cart2>
            </div>
            <div>Cart</div>
          </div>
        </a>
      </div>
    )
}