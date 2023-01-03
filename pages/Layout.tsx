import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
  headerColor: string;
}

const Layout: React.FC<Props> = ({ children, headerColor }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <meta name="robots" content="all" />
        <meta 
          name="keywords" 
          content="Доставка їжі для тварин" 
        />
        <link rel="icon" href="/favicon.png"></link>
        <title>CLEVER DUCK</title>
      </Head>
      
      <div className="main__content">
        <Header color={headerColor || 'black'}/>
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;