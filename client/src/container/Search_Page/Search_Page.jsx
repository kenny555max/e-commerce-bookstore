import Header from "../../components/Headers/Header";
import { Link } from 'react-router-dom';
import about from '../../assets/banner.jpg';
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";

const Search_Page = () => {
    return (
        <div className="search">
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
                <h1>Search</h1>
                <div>
                    <Link to='/home'>home / </Link>
                    <Link to='/search'>search</Link>  
                </div>    
            </div>
            <Search />
            <Footer />
        </div>
    )
}

export default Search_Page;