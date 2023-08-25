import { Link } from 'react-router-dom';

import about from '../../assets/banner.jpg';
import Header from '../../components/Headers/Header';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

const Shop = () => {
    return (
        <div className='shop'>
            <Header />
            <div className='about_banner' style={{
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
            }}>
                <h1>Our Shop</h1>
                <div>
                    <Link to='/products'>home / </Link>
                    <Link to='/shop'>shop</Link>  
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    )
}

export default Shop;