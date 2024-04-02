// import React from 'react'

import Footer from "./Footer";
import Header from "./Header";

function NotConnectedLayout({ children }: any) {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-center items-center gap-8 w-full md:flex-row md:justify-evenly md:items-center">
        {children}
      </section>
      <Footer />
    </>
  );
}

export default NotConnectedLayout;
