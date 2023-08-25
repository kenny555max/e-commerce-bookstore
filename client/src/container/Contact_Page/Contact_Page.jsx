import Header from "../../components/Headers/Header"
import { Link } from 'react-router-dom';
import about from '../../assets/banner.jpg';
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";

const Contact_Page = () => {
    return (
        <div className="contact">
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
                <h1>Contact Us</h1>
                <div>
                    <Link to='/home'>home / </Link>
                    <Link to='/contact'>contact</Link>  
                </div>  
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Contact_Page;