import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove_item_from_cart, update_item_from_cart } from '../../actions';

const Cart = ({ product }) => {
    const [qty, set_qty] = useState(product.quantity);
    const dispatch = useDispatch();

    const remove_item = (cartId) => {
        dispatch(remove_item_from_cart(cartId));
    }

    const update_item = (cartId) => {
        dispatch(update_item_from_cart(cartId, { quantity: qty }));
    }

    return (
        <div className="card">
            <div className="card_img">
                <div className="overlay_price">{product.price}</div>
                <img height='100%' width='100%' src={product.src} alt="product" />
            </div>
            <div className="card_action">
                <h5>{product.name}</h5>
                <div className='update' style={{ display: 'flex' }}>
                    <input style={{ flex: 0.7 }} type="number" value={qty} onChange={(e) => set_qty(e.target.value)} />
                    <button onClick={() => update_item(product._id)} style={{ flex: 0.3 }}>update</button>
                </div>
                <div className='remove'>
                    <button style={{ backgroundColor: 'red' }} onClick={() => remove_item(product._id)}>remove</button>
                </div>
            </div>
        </div>
  )
}

Cart.propTypes = {
    product: PropTypes.object.isRequired
}

export default Cart