import Footer from 'components/shared/footer';
import Header from 'components/shared/header';

import { aeonik, inter } from './fonts';

import 'styles/global.css';

// eslint-disable-next-line react/prop-types
function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aeonik.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
