import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import about from '../../assets/banner.jpg';

const Header = lazy(() => import('../../components/Headers/Header'));
const Cart = lazy(() => import('../../components/Cart/Carts'));
const Footer = lazy(() => import('../../components/Footer/Footer'));

const Cart_Page = () => {
    return (
        <div className="header">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
            </Suspense>
            <div
                className='about_banner'
                style={{
                    fontFamily: 'sans-serif',
                    backgroundImage: `url(${about})`,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '200px',
                    justifyContent: 'center',
                    lineHeight: '1.5',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    marginBottom: '40px'
                }}
            >
                <h1>Shopping Cart</h1>
                <div>
                    <Link to='/home'>home / </Link>
                    <Link to='/cart'>cart</Link>
                </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Cart />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default Cart_Page;
