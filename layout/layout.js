import Footer from '../components/footer';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>SMP Mutu</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />

            <link href="css/bootstrap.min.css" rel="stylesheet" />
            <link href="css/modern-business.css" rel="stylesheet" />
            <link href="css/design.css" rel="stylesheet" />
        
        </Head>
        {props.children}
        <Footer />
    </div>
)

export default Layout;