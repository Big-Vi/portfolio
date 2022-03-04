import "../styles/base.scss"
import "../styles/styles.scss"
import "../styles/nprogress.scss";

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module'
import * as ga from '@functions/ga'
import NProgress from 'nprogress';

const tagManagerArgs = {
    gtmId: 'GTM-N9J4M9S'
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();

	useEffect(() => {
      TagManager.initialize(tagManagerArgs) 
      
      // const handleRouteChange = (url) => {
      //     ga.pageview(url)
      // }

      router.events.on('routeChangeStart', (url) => {
        NProgress.configure({ showSpinner: false });
        NProgress.start();
      });
      router.events.on('routeChangeComplete', (url, {shallow} ) => {
        // if (!shallow) {
        //     handleRouteChange(url)
        // }
        NProgress.done();
        // small hack to ensure scroll to top always happens last
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      });
      router.events.on('routeChangeError', () => NProgress.done());

      return () => {
          router.events.off('routeChangeComplete', (url) => {
              handleRouteChange(url)
          })
      }
	}, [router.events]);

  return <Component {...pageProps} />
}
export default MyApp
