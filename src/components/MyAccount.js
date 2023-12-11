import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function MyAccount() {
    return (
        <div className="account">
            <a href="/account" role="button">
                <div className="my-account d-flex justify-content-left align-items-center">
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} className="cust-svg"
                            style={{ width: '1.5rem', height: '1.5rem' }} />
                    </div>
                    <div className='sm-hide'>My account</div>
                </div>
            </a>
        </div>
    );
}