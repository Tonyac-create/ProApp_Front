// import React from 'react'

import Footer from "./Footer";
import Header from "./Header";

function NotConnectedLayout({ children }: any) {
  return (
    <div className="flex flex-col">
      <Header />
      <section className="flex flex-col justify-center items-center gap-8 pt-7 w-full md:flex-row md:justify-evenly md:items-center md:py-40">
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default NotConnectedLayout;
