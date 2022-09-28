import Head from 'next/head';

const Layout = ({children}) => {
    return <>
            <Head>
                <link rel="stylesheet" href="/css/normalize.css"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Inter:wght@100;200;300;400;500;600;700;900&family=Rozha+One&display=swap" rel="stylesheet"/>
            </Head>
            {children}
           </>
}

export default Layout;