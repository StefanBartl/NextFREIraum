import '../styles/globals.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({
  Component,
  pageProps: {...pageProps },
}) 
{
  return (<Component {...pageProps} />)
}