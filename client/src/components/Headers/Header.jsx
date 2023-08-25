import { FaFacebookF, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaTwitter, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Header.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_carts } from '../../actions';
import { clear_message } from '../../reducers/productReducer';

const Header = () => {
    const dispatch = useDispatch();
    const { carts, message } = useSelector((state) => state.productReducer);
    useEffect(() => {
        dispatch(get_all_carts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[message]);

    return (
        <div className='header'>
            {message !== '' && (
                <div className='added_message'>
                    <div className='container' style={{ display: 'flex', justifyContent: 'space-between', height: '40px', alignContent: 'center' }}>
                        <p>{message}</p>
                        <button onClick={() => dispatch(clear_message())}>x</button>
                    </div>
                </div>
            )}
            <div className="top_header">
                <div className="container">
                    <div className="social_media_icons">
                        <Link to=''><FaFacebookF /></Link>
                        <Link to=''><FaTwitter /></Link>
                        <Link to=''><FaInstagram /></Link>
                        <Link to=''><FaLinkedin /></Link>
                    </div>
                    <div className='profile'>
                        <Link to=''>new <span>login</span></Link>
                        <Link to=''>register</Link>
                    </div>
                </div>
            </div>
            <div className="bottom_header">
                <div className="container">
                    <div className="logo">
                        <h2><Link to=''>Bookly.</Link></h2>
                    </div>
                    <nav>
                        <ul>
                            <Link to='/home'>home</Link>
                            <Link to='/about'>about</Link>
                            <Link to='/shop'>shop</Link>
                            <Link to='/contact'>contact</Link>
                            <Link to=''>orders</Link>
                        </ul>
                    </nav>
                    <div className='icons'>
                        <Link to='/search'><FaSearch /></Link>
                        <Link to=''><FaUser /></Link>
                        <Link to='/cart'><FaShoppingCart /></Link>
                        <Link to='/cart'>({carts.length})</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;