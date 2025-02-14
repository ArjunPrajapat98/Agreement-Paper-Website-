import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css'
import 'react-input-range/lib/css/index.css'
import Script from 'next/script'
import AOS from "aos";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>

      <Component {...pageProps} />
    </>
  )
}
