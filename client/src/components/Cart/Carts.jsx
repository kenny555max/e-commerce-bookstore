import Cart from './Cart';
import { useDispatch, useSelector } from 'react-redux';
import { empty_cart_item } from '../../actions';

const Carts = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.productReducer.carts);

    const empty_cart = () => {
        if (carts.length === 0) {
            alert('No item in the cart');
            return;
        }

        dispatch(empty_cart_item());
    }

    return (
        <div className='carts' style={{ marginBottom: '20px' }}>
            <div className="cart_container" style={{ width: '80%', margin: '0 auto' }}>
                <div className="title">
                    <h1>Cart</h1>
                </div>
                {carts.length === 0 ? (
                    <div>No item in the cart yet...........</div>
                ) : (
                    <div className="display_carts" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                        {carts?.map((product, index) => {
                            return <Cart product={product} key={index} />
                        })}
                    </div>
                )}
                <div className="load_more">
                    <button onClick={empty_cart}>empty cart</button>
                </div>
            </div>
        </div>
    )
}

export default Carts;