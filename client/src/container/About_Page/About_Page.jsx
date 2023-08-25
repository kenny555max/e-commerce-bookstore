import Header from "../../components/Headers/Header";
import Why from "../../components/Why/Why";
import { Link } from 'react-router-dom';
import about from '../../assets/banner.jpg';


const About_Page = () => {
  return (
    <div className="about_page">
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
            <h1>About Us</h1>
            <div>
                <Link to='/products'>home / </Link>
                <Link to='/'>about</Link>  
            </div>  
      </div>
      <Why />
    </div>
  )
}

export default About_Page;