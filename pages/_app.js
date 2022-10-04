import Footer from '../components/Footer';
import Navbar from '../components/Navbar.js';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (<>
    <Navbar/>
    <Component {...pageProps} />
   <Footer/>
  </>
  );
}

export default MyApp;
