import Head from "next/head";
import { useContext } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { ThemeContext } from "../../context/theme";

export default function Layout({ title, keywords, description, children }) {

    const { isDark } = useContext(ThemeContext);

    return (
        <div >
            <Head>
                <title>{ title }</title>
                <meta name="description" content={ description } />
                <meta name="keywords" content={ keywords } />
            </Head>

            <Navbar />

            <div className={ isDark ? 'dark' : '' }>
                <div className="p-4">
                    { children }
                </div>
            </div>

            <Footer />

        </div>
    );
}

Layout.defaultProps = {
    title: 'Google Search App',
    description: 'Google Search clone created with NextJS and powered by Rapid API',
    keywords: 'API, Search, Next js, React'
};
