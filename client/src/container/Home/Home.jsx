import Header from '../../components/Headers/Header'
import Banner from '../../components/Banner/Banner'

import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Products from '../../components/Products/Products';


const Home = () => {
  return (
    <>
        <Header />
        <Banner />
        <Products />
        <About />
        <Footer />
    </>
  )
}

export default Home;