import { Cart2 } from 'react-bootstrap-icons';

export default function CartIcon({bgBlue=false}){
    return (
        <div className="cart">
        <a href="/cart" role="button">
          <div className="my-account d-flex justify-content-left align-items-center">
            <div>
            <Cart2 className="cust-svg" style={{width:'1.5rem', height:'1.5rem', color: bgBlue? 'white': 'blue'}}></Cart2>
            </div>
            <div className="sm-hide" style={{color: bgBlue? "white": 'blue'}}>Cart</div>
          </div>
        </a>
      </div>
    )
}