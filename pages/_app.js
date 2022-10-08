import { useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar.js';
import '../styles/globals.css'
require('intersection-observer');
function MyApp({ Component, pageProps }) {
  //on scroll fade in animation
  useEffect(() => {
    const targets = document.querySelectorAll(".js-show-on-scroll");
    const newOptions = {};

    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
    };

    const observer = new IntersectionObserver(callback, newOptions);

    // Loop through each of the target
    targets.forEach(function(target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
    });
}, []);

  return (<>
    <Navbar/>
    <Component {...pageProps} />
   <Footer/>
  </>
  );
}

export default MyApp;
