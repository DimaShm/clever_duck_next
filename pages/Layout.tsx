import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href="/favicon.png"></link>
        <title>CLEVER DUCK</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;