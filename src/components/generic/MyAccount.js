import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function MyAccount({bgBlue=false}) {
    return (
        <div className="account">
            <Link href="/account" role="button">
                <div className="my-account d-flex justify-content-left align-items-center">
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} className="cust-svg"
                            style={{ width: '1.5rem', height: '1.5rem', color: bgBlue ?'white': 'blue'}} />
                    </div>
                    <div className='sm-hide' style={{color: bgBlue? 'white': 'blue'}}>My account</div>
                </div>
            </Link>
        </div>
    );
}