import Head from 'next/head';
import '../public/admin/assets/css/bootstrap.min.css'; // Ensure this path is correct
import { baseUrl } from '@/helper/helper';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="stylesheet" href={`${baseUrl}admin/assets/css/preloader.min.css`} type="text/css" /> 
        <link href={`${baseUrl}admin/assets/css/bootstrap.min.css`} id="bootstrap-style" rel="stylesheet" type="text/css" /> 
        <link href={`${baseUrl}admin/assets/css/icons.min.css`} rel="stylesheet" type="text/css" />
        <link href={`${baseUrl}admin/assets/css/app.min.css`} rel="stylesheet" type="text/css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
